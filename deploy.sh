#!/bin/bash
# In lieu of a more sophisitcated deploy tool like Capistrano,
# this script will perform automated deployments.
#
# The remote version will:
# - clone the latest code from github
# - install necessary node packages
# - build the React UI
# - set up necessary symbolic links
# - purge any old deploys beyond most recent 5
# - restart the server
#
# The local mode will:
# - build the React UI locally
# - copy it over to the server
#
# Usage:
# ./deploy.sh [production|staging] [remote]
#
environment=test
ENVIRONMENT=${1:-$environment}
mode=local
MODE=${2:-$mode}
BUILD_VER=`date +%Y%m%d%H%M%S`

DEPLOY_HOST="rescue@45.79.204.187"
GIT_REPO="git@github.com-rescue-ui:pothoven/rescue-ui.git"

if [ $ENVIRONMENT = "production" ] || [ $ENVIRONMENT = "prod" ]
then
  DEPLOY_DIR="/home/rescue/public_html/production/current/public"
  export REACT_APP_LOCAL=production
else
  DEPLOY_DIR="/home/rescue/public_html/staging/current/public"
  export REACT_APP_LOCAL=staging
fi
echo -e "\033[34mDoing \033[1m${MODE} ${ENVIRONMENT}\033[0;34m deploy to ${DEPLOY_DIR}...\033[0m"

if [ $MODE = "local" ]
then
  # Doing local build and copy to server
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
  echo -e "\033[32mBuilding and deploying from ${DIR}...\033[0m"
  cd $DIR

  NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  if type "nvm" &> /dev/null; then
    nvm use
  else
    echo -e "\033[31mNot using nvm\033[0m"
  fi

  # do a clean build
  rm -rf ${DIR}/dist
  if [ $ENVIRONMENT = "production" ] || [ $ENVIRONMENT = "prod" ]
  then
	npm run-script build -- --prod
  else
  	npm run-script build
  fi

  RESULT=$?
  if [ $RESULT -eq 0 ]; then
    echo -e "\033[32mCopying build to server at ${DEPLOY_DIR}...\033[0m"
    # Copy the built code to the new directory
    scp -Cr build/* $DEPLOY_HOST:${DEPLOY_DIR}/
  else
    echo -e "\033[31mDeploy failed\033[0m"
  fi

else
  # Doing a full clean build and deploy on the server
  if [ $ENVIRONMENT = "production" ] || [ $ENVIRONMENT = "prod" ]
  then
    EXTRACT_DIR="/home/rescue/rescue-ui/production"
  else
    EXTRACT_DIR="/home/rescue/rescue-ui/staging"
  fi

  # Do the following commands remotely on the server
  ssh -T $DEPLOY_HOST << EOF
    STATUS=0
    [ "\$STATUS" -eq 0 ] && echo -e "\e[32mPulling latest code from git...\e[0m"
    [ "\$STATUS" -eq 0 ] && git clone ${GIT_REPO} ${EXTRACT_DIR}/${BUILD_VER} || STATUS=1
    [ "\$STATUS" -eq 0 ] && cd ${EXTRACT_DIR}/${BUILD_VER} || STATUS=1
    [ -s "/home/rescue/.nvm/nvm.sh" ] && \. "/home/rescue/.nvm/nvm.sh"
    [ "\$STATUS" -eq 0 ] && nvm use || STATUS=1
    [ "\$STATUS" -eq 0 ] && echo -e "\e[32mInstalling dependencies...\e[0m"
    [ "\$STATUS" -eq 0 ] && npm ci  --prefer-offline --silent || STATUS=1
    [ "\$STATUS" -eq 0 ] && echo -e "\e[32mBuilding React UI...\e[0m"
    if [ ${ENVIRONMENT} = "production" ] || [ ${ENVIRONMENT} = "prod" ]
    then
      [ "\$STATUS" -eq 0 ] && npm run-script build -- --prod || STATUS=1
    else
      [ "\$STATUS" -eq 0 ] && npm run-script build || STATUS=1
    fi    
    [ "\$STATUS" -eq 0 ] && echo -e "\033[32mCopying build to ${DEPLOY_DIR}...\033[0m"
    # Copy the built code to the Rails public directory
    [ "\$STATUS" -eq 0 ] && cp -r build/* ${DEPLOY_DIR}/ || STATUS=1
    [ "\$STATUS" -eq 0 ] && cd ${EXTRACT_DIR} || STATUS=1
    [ "\$STATUS" -eq 0 ] && echo -e "\e[32mCleaning up old deployments...\e[0m"
    [ "\$STATUS" -eq 0 ] && ls -tp | grep '/$' | tail -n +6 | tr '\n' '\0' | xargs -0 -r rm -rf
    [ "\$STATUS" -eq 0 ] && rm current; ln -s ${BUILD_VER} current || STATUS=1
    exit \$STATUS
EOF
fi

[ $? -eq 0 ] && echo -e "\033[32mDeployed successfully\033[0m" || echo -e "\033[31mDeploy failed\033[0m"
