import * as React from 'react';
import DataStorage from 'components/DataStorage';
import ClueHistory from 'components/ClueHistory';
import ClueResolver from 'components/ClueResolver';

class ClueManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentClue: 0,
    };

    this.nextClue = this.nextClue.bind(this);
  }

  componentDidMount() {
    // if the value exists in local storage set the state of the current clue
    let currentClue = parseInt(DataStorage.getItem('currentClue'),10);
    if (currentClue && currentClue !== this.state.currentClue) {
      this.setState({
        currentClue
      });
    }
  }

  nextClue() {
    this.setState({
      currentClue: this.state.currentClue + 1,
    }, () => {
      DataStorage.saveItem('currentClue', this.state.currentClue);
    });
  }

  render() {
    return (
      <div className="clue-manager">
        <ClueHistory cluesToShow={this.props.clues.slice(this.state.currentClue-1, this.state.currentClue)} />
        <ClueResolver nextClue={this.props.clues.slice(this.state.currentClue, this.state.currentClue+1)[0]} onAnswerCorrect={this.nextClue}/>
      </div>
    )
  }
}

export default ClueManager;
