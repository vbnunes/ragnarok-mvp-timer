import React, { Component } from 'react';
import './mvpitem.scss'
import Countdown from 'react-countdown-now';
import Notifier from "react-desktop-notification"


export default class index extends Component {
  state = { date: Date.now() + this.props.mvp.respawn_time };
  
  constructor(props) {
    super(props);
    this.api = React.createRef();
    this.id_mvp = 1086;
  }
  
  handleComplete = () => {
    Notifier.focus("MVP Notification",`${this.props.mvp.name} just respawned`,"www.google.com","","MVP");
  }

  renderer = ({ hours, minutes, seconds, completed, api}) => {
    if (completed) {
      return <span>{("0" + hours).slice(-2)}:{("0" + minutes).slice(-2)}:{("0" + seconds).slice(-2)}</span>
    } else {
      this.api = api;
      return <span>{("0" + hours).slice(-2)}:{("0" + minutes).slice(-2)}:{("0" + seconds).slice(-2)}</span>;
    }
  }

  handleResetClick = () => { 
    this.setState({ date: Date.now() + this.props.mvp.respawn_time});
  };
  render() {
    const {id, map, respawn} = this.props.mvp;

    return (
        <div className="mvpitem-container">
          <div className="item-header">
            <span className="respawn-time">{respawn}</span>
            <span className="id-box">{map}</span>
          </div>
          <div className="image-box">
            <img src={`./img/${id}.gif`} alt={id}/>
          </div>
          <div className="timer-box">
            <Countdown key={this.state.date} date={this.state.date} renderer={this.renderer} onComplete={this.handleComplete} autoStart={false} />
          </div>
          <div className="btn-container">
            <button class="button green" onClick={() => this.api.start()}>Start</button>
            <button class="button red" onClick={this.handleResetClick}> Reset</button> 
          </div>
      </div>
    )
  }
}
