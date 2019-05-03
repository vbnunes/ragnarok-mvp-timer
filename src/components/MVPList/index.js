import React, { Component } from 'react';
import MVPItem from '../MPVItem';
import { connect } from 'react-redux';
import './mvplist.scss';

class MVPList extends Component {
  renderList(){
    return this.props.mvps.map(mvp => {
        return (
          <div className="grid-item">
            <MVPItem mvp={mvp} key={mvp.id} className="four wide column"/>
          </div>
        );
    });
}
  
  render() {
    return (
      <div className="grid-container">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {mvps: state.mvps}
}

export default connect(mapStateToProps)(MVPList)