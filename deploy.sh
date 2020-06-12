#!/bin/bash
environment=test
ENVIRONMENT=${1:-$environment}
BUILD_VER=`date +\%Y\%m\%d-\%H%M`
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
NVM_DIR="$HOME/.nvm"

if [ $ENVIRONMENT = "production" ] || [ $ENVIRONMENT = "prod" ]
then
   DEPLOY_DIR=/home/rescue/public_html/production/current/public
else
   DEPLOY_DIR=/home/rescue/public_html/staging/current/public
fi

DEPLOY_HOST=rescue@45.79.204.187

Command_exists () {
  type "$1" &> /dev/null;
}

echo "Building and deploying from ${DIR}..."
cd $DIR
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
if command_exists nvm ; then
    nvm use
else
    echo "not using nvm"
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
    echo "Copying build to server at ${DEPLOY_DIR}..."
    # Copy the built code to the new directory
    scp -Cr build/* $DEPLOY_HOST:${DEPLOY_DIR}/
else
    echo "Build failed.  Aborting deploy."
fi

