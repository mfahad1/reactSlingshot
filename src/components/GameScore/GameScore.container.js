import React, { Component } from 'react';
import { fetchScores } from '../../actions/getAllScore';
import {connect} from 'react-redux'

import { GameDataTable } from './dataTable.component';


class GameScore extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log('mountuning');
    this.props.dispatch(fetchScores());
  }

  tableScore (scores) {
    console.log(scores);
    if(scores) return (
      <GameDataTable 
        scoresData = {scores}
      />
    )
  }

  render() {
    console.log('getting all', this.props.getAllScore);
    return (
      <div>
        {
          this.tableScore(this.props.getAllScore)
        }
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    getAllScore : state.getAllScore.scores
  }
}


export default connect(
  mapStateToProps
)(GameScore);
