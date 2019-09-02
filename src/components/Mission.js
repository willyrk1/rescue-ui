/********************************************************************************
 * Missions component
 *
 * Missions component for the Rescue UI. 
 *
 * author: Steven Pothoven (steven@pothoven.net)
 ********************************************************************************/

import React, { Component } from 'react';
import StFrancisRescue from '../apis/StFrancisRescue';
import BoardMember from './BoardMember';

class Mission extends Component {
    constructor(props) {
        super(props);

        this.state = { data : {}};
    }

    componentDidMount() {
		StFrancisRescue.getBoardMembers()
            .then(data => this.loadBoardMembers(data))
            .catch(error => console.error(error));

    }

    loadBoardMembers(data) {
        this.setState({data : data.data});
    }

    renderBoardMembers(boardMembers) {
        const b = [];
        if (boardMembers) {
            boardMembers.forEach(boardMember => {
                b.push(<BoardMember boardMember={boardMember} key={`board-member-${boardMember.id}`} />);
            });
        }
        return <div>{b}</div>;
    }

    render() {
        const { presidents, vicePresidents, treasurers, secreteries, directors, adminStaff }  = this.state.data;
        
        return (
			<div id="missions">
              <h3>Our mission at St. Francis</h3>
              <p>St. Francis Society Animal Rescue is an all volunteer, non-profit 501-c-3 animal rescue organization dedicated to saving the lives of sick, injured, and stray domestic animals as well as spaying/neutering and medical services for those animals. We seek to place animals in a loving foster or permanent home after recovery and we DO NOT euthanize unless terminal illness necessitates such a decision. All of our animals are spayed/neutered, tested for leukemia/FIV, wormed and vaccinated&nbsp; before they are adopted.</p>

              <p><strong><span style={{fontSize: "medium", fontFamily: "comic sans ms,sans-serif"}}>Why We Chose the Name St. Francis</span></strong></p>
              
              <p>Poorly dressed in rough brown cloth, a little thin man felt compassion for the smallest of God's creatures. He brought safety to worms he found in the middle of the road by gently picking them up and placing them on the side of the road. St. Francis of Assissi chose to live in poverty, while rejoicing in the world's natural beauty. Joyfully praising "Brother Sun, Sister Moon, Brother Fire and Sister Water" thru his poetry. Even more, he loved living creatures; teaching that all should be generous to animals and birds. Throughout his travels, St. Francis spoke of God's great love and care for his companion animals. During a long winter travel, he brought honey to the bees, exchanged his cloak to a butcher in return for two lambs - to save them from slaughter. He urged people to throw out grain for the birds, and was seen throwing freshly caught fish back in the water. He was loved and followed by many pet animals; lambs, rabbits, and pheasants, among them. Today, we celebrate the "Feast of St. Francis" on October 4th. Across the world, a Blessing of the Animals is held on this day.</p>

              <h3>Board of Directors</h3>
              {this.renderBoardMembers(presidents)}
              {this.renderBoardMembers(vicePresidents)}
              {this.renderBoardMembers(treasurers)}
              {this.renderBoardMembers(secreteries)}
              {this.renderBoardMembers(directors)}
              {this.renderBoardMembers(adminStaff)}

            </div>
		);
	}
}

export default Mission;
