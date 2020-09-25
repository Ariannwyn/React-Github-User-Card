import React from "react";
import axios from "axios";
import GithubCard from "./components/GithubCard";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: "ariannwyn",
      followers: [],
      followerCard: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.friend}`)
      .then((response) => {
        this.setState({
          followers: [response.data],
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate() {}

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({
      friend: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.friend}/followers`)
      .then((response) => {
        this.setState({
          followers: response.data,
        });
      })
      .catch((error) => console.log(error));
    // .finally(
    //   this.state.followers.map((follower) => {
    //     axios
    //       .get(`https://api.github.com/users/${follower}`)
    //       .then((response) => {
    //         this.setState({
    //           followerCard: [response.data],
    //         });
    //         console.log("hi", this.state.followerCard);
    //       })
    //       .catch((error) => console.log(error));
    //   })
    // );
  };

  render() {
    return (
      <div className="container">
        <h1>My Github Followers!</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.handleChanges}
            placeholder="Enter a github username"
          />
          <button type="submit">Show A Users Followers!</button>
        </form>
        <GithubCard followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
