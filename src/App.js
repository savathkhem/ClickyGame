import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import icons from "./icons.json";
import "./App.css";

class App extends Component {
  state = {
    icons,
    score: 0,
    topScore: 0,
  };

  handleClick = (event) => {
    const targetIndex = event.target.id;
    const score = this.state.score;
    if (this.state.icons[targetIndex].clicked===false){
      this.trackScore();
      this.setState({score: score + 1})
      this.iconClick(targetIndex);
    } else {
      this.setState({score: this.setState.score = 0})
      this.resetClicked();
    }
  };

  resetClicked = () => {
    const array = this.state.icons;
    let i = array.length - 1;
    for (; i > 0; i--) {
    array[i].clicked = false;
    }
  };

  trackScore = () => {
    if (this.state.score === this.state.topScore) {
    this.setState ({topScore: this.state.topScore + 1})
    }
  };

  iconClick = (x) => {
    const array = this.state.icons;
    array[x].clicked = true;
    this.setState({icons: array});
    console.log(this.state.icons);
  };

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {
    const shuffleIcons = this.shuffleArray(this.state.icons);
    return (
      <Wrapper>
        <Title>Street Fighters          Score{this.state.score}     TopScore:{this.state.topScore}</Title>
        {shuffleIcons.map((icon, index) => (
          <Card
            id={icon.id}
            key={index}
            index={index}
            name={icon.name}
            image={require(`./icons/${icon.name}.png`)}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
