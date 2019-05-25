import * as React from 'react';

export default class ClueResolver extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonDisabled: true,
      incorrectAnswer: false,
    };

    this.answerBox = null;

    this.checkAsType = this.checkAsType.bind(this);
    this.checkOnClick = this.checkOnClick.bind(this);
  }

  checkAsType(e) {
    let input = e.target.value;
    this.setState({
      buttonDisabled: !input
    });
  }

  checkOnClick() {
    if (this.answerBox && this.answerBox.value.toLowerCase() === this.props.nextClue.input) {
      this.setState({
        buttonDisabled: true,
        incorrectAnswer: false,
      }, () => {
        this.props.onAnswerCorrect();
        this.answerBox.value = '';
      });
    } else {
      this.setState({
        incorrectAnswer: true,
      });
    }
  }

  render() {
    return (this.props.nextClue && (
      <div className="clue-resolver">
        <input type="text" ref={(input) => this.answerBox = input} name="answerBox" onChange={this.checkAsType} />
        <button disabled={this.state.buttonDisabled} onClick={this.checkOnClick}>Check</button>
        {this.state.incorrectAnswer && (
          <div className="incorrect">That's not quite right, try again!</div>
        )}
      </div>
    )) || null;
  }
}
