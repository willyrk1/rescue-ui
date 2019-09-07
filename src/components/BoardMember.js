/********************************************************************************
 * BoardMember component
 *
 * BoardMember component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react';
import {PROTOCOL, HOSTNAME} from '../config/StFrancisRescue';
import './BoardMember.scss';

class BoardMember extends Component {

    render() {
        const boardMember = this.props.boardMember;
        const picture = boardMember.picture ? `${PROTOCOL}://${HOSTNAME}${boardMember.picture}` : "/no_picture.jpg";
        
        return (
            <div className="boardMember">
              <h2>{ `${boardMember.volunteer.name.split(' ')[0]}-${boardMember.board_member_title.name}`}</h2>
              { boardMember.role &&
                  <h3>{ boardMember.role }</h3>
                  }
  
                  <div className="left fifteen">
                    <img alt="" width="100%" src={picture} />
                  </div>
                  <div className="right eighty-five">
  	                <div className="padded">
                      <span dangerouslySetInnerHTML={{__html:  boardMember.bio }} />
                    </div>
                  </div> 
                  <br style={{clear: "both"}} />
            </div>
        );
    }
}

export default BoardMember;
