import React, { Component } from 'react';
import './App.css';
import { PotList } from './components/PotList.js';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pots: [
        {title: "PS4", currentAmount: "175", goal: "350", done: false},
        {title: "Weekend Away", currentAmount: "50", goal: "200", done: false}
      ],

      completedPots: [
        {title: "New Bike", currentAmount: "300", goal: "300", done: true},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>My Pots</h2>
        </div>
        <Grid>
          <Row>
            <Col lg={5} lgOffset={1}>
              <h4 className="pot-list-heading">Active Pots ({this.state.pots.length})</h4>
              <PotList pots={this.state.pots}/>
            </Col>
          </Row>
          <Row>
            <Col lg={5} lgOffset={1}>
              <h4 className="pot-list-heading">Completed Pots ({this.state.completedPots.length})</h4>
              <PotList pots={this.state.completedPots} />
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
