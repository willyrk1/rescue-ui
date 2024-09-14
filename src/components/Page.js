/********************************************************************************
 * Pages component
 *
 * Pages component for the Rescue UI.
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react'
import StFrancisRescue from '../apis/StFrancisRescue'
import { URI } from '../config/StFrancisRescue'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = { data: {} }

    let pagename = 'home'
    if (props.match && props.match.params && props.match.params.pagename) {
      pagename = props.match.params.pagename
    }
    StFrancisRescue.getPage(pagename)
      .then(data => this.loadPage(data))
      .catch(error => console.error(error))
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) {
      let pagename = 'home'
      if (
        this.props.match &&
        this.props.match.params &&
        this.props.match.params.pagename
      ) {
        pagename = this.props.match.params.pagename
      }
      StFrancisRescue.getPage(pagename)
        .then(data => this.loadPage(data))
        .catch(error => console.error(error))
    }
  }

  loadPage(data) {
    this.setState({ data: data.data, loaded: true })
  }

  render() {
    const { page } = this.state.data

    if (this.state.loaded) {
      const content = page.content.replace(
        /\/uploads/g,
        `${URI}/uploads`
      )
      return (
        <div id="page">
          <span dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )
    } else {
      return <div id="page">Loading...</div>
    }
  }
}

export default Page
