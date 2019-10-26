import React, { Component } from 'react';
import Main from './components/Main';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      topScore: 0,
      clicked: []
    }
  }
  itScored = (id) => {
    if (this.state.clicked.includes(id)) {
      alert("You've already married that character! Game Over!");
      this.setState({score:0});
      this.setState({clicked:[]});
    } else {
      this.setState({clicked: [...this.state.clicked,id]});
      const nextScore = this.state.score + 1;
      this.setState({
        score: nextScore
      });
      if (nextScore > this.state.topScore) {
        this.setState({topScore: nextScore});
      }
      if (nextScore === 10) {
        alert("Congrats you married all the characters! You win!");
        this.setState({score:0});
        this.setState({clicked:[]});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Main itScored={this.itScored}/>
      </div>
    )
  }
}
export default App;