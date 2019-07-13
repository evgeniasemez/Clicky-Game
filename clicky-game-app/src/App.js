import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavBar from "./components/NavBar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    correctNotcorrect: undefined,
    topguesses: 0,
    clickedFriends: []
  };

  shuffleFriend = (id, e) => {
    console.log(e.target);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    const friendship = this.state.friends;
    let i = friendship.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = friendship[i];
      friendship[i] = friendship[j];
      friendship[j] = temp;
    }

    let tempArr = [...this.state.clickedFriends];
    tempArr.push(id);
    if (this.state.clickedFriends.includes(id)) {

    }

    // Set this.state.friends equal to the new friends array
    this.setState({ friends: friendship });
    this.setState({ score: this.state.score + 1, correctNotcorrect: true });
    this.setState({ clickedFriends: tempArr });
    console.log(this.state.clickedFriends);

  };

  resetScore = () => {
    this.setState({ score: 0 });
    this.setState({ correctNotcorrect: false });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar
          score={this.state.score}
          correctNotcorrect={this.state.correctNotcorrect}
          topguesses={this.state.topguesses}
          handleIncrement={this.handleIncrement}
        />

        <Title>Clicky Game!
        <h6>Click on an image to earn points, but don't click on any more than once!</h6>
        </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriend={this.shuffleFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            handleIncrement={this.handleIncrement}
          />
        ))}
      </Wrapper>
    );
  }

}

export default App;
