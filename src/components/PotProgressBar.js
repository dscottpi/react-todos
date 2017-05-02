import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class PotProgressBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentAmount: props.currentAmount, goal: props.goal,
      style: {height: '0px'}
    }
  }

  calculateCompletionPercentage() {
    var amount = parseFloat(this.state.currentAmount);
    var goal = parseFloat(this.state.goal);
    var completionPercentage = ((amount / goal) * 100).toFixed(2);
    return completionPercentage;
  }

  componentDidMount() {
    var maxHeight = this.refs.progressbar_wrapper.clientHeight;
    var completionPercentage = this.calculateCompletionPercentage();

    var progress = (completionPercentage / 100) * maxHeight;

    this.setState({
      style: {height: progress + 'px'}
    })
  }

  render() {
    return (
      <div ref="progressbar_wrapper" className="pot-progress">
        <div style={this.state.style} ref="progressbar" className="pot-progressbar">
        </div>
      </div>
    );
  }

}
