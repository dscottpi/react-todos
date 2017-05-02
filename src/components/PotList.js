import React, { Component } from 'react';
import { Pot } from './Pot.js';
import '../static/css/style.css';

export class PotList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pots = this.props.pots.map((pot) =>
      <li><Pot title={pot.title} done={pot.done} currentAmount={pot.currentAmount} goal={pot.goal}/></li>
    );

    return (
      <div className="pot-list">
        <ul>
            {pots}
        </ul>
      </div>
    );
  }
}
