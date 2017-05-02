import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../static/css/style.css';
import { PotProgressBar } from './PotProgressBar.js'

export class Pot extends Component {

  constructor(props) {
    super(props);

    this.state = {title: props.title, done: props.done, currentAmount: props.currentAmount, goal: props.goal}
  }

  render() {
    return (
      <div className="pot-item">
        <PotProgressBar currentAmount={this.state.currentAmount} goal={this.state.goal}/>  
        <p className="pot-item-title">{this.state.title}</p>
        <p className="pot-item-money"><span>£{this.state.currentAmount}</span> of £{this.state.goal}</p>
      </div>
    );
  }

}
