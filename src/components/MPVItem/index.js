import React, { Component } from 'react';
import './mvpitem.scss'

export default class index extends Component {
  render() {
    const {id, respawn_time, time_left, mvp_gif} = this.props.mvp;

    return (
        <div className="mvpitem-container">
          <div className="item-header">
            <span className="respawn-time">{respawn_time}</span>
            <span className="id-box">prt_sewb4</span>
          </div>
          <div className="image-box">
            <img src={mvp_gif} alt={id}/>
          </div>
          <div className="timer-box">
            00:00:00
          </div>
          <div className="btn-container">
            <button class="button green">Start</button>
            <button class="button red">Pause</button> 
          </div>
      </div>
    )
  }
}
