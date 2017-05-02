import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class PotProgressBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentAmount: parseFloat(props.currentAmount), goal: parseFloat(props.goal),
      style: { height: '0px', backgroundColor: '#f380aa' }
    }
  }

  calculateCompletionPercentage() {
    var amount = this.state.currentAmount;
    var goal = this.state.goal;
    var completionPercentage = ((amount / goal) * 100).toFixed(2);
    
    return completionPercentage;
  }

  componentDidMount() {
    var maxHeight = this.refs.progressbar_wrapper.clientHeight;
    var completionPercentage = this.calculateCompletionPercentage();

    var progress = (completionPercentage / 100) * maxHeight;

    var bgColor = "f380aa";
    if (this.state.currentAmount >= this.state.goal) {
        bgColor = "#00e285";
    }

    this.setState({
      style: { height: progress + 'px', backgroundColor: bgColor }
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
