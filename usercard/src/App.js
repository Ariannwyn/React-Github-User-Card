import React from "react";
import axios from "axios";
import GithubCard from "./components/GithubCard";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: "",
      id: 1,
      name: "",
      username: "",
      userImg: "",
      location: "",
      profile: "",
      followers: "",
      following: "",
      bio: "",
      email: "",
      twitter: "",
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/ariannwyn`).then((response) => {
      this.setState({
        name: response.data.name,
        username: response.data.login,
        userImg: response.data.avatar_url,
        location: response.data.location,
        profile: response.data.html_url,
        followers: response.data.followers,
        following: response.data.following,
        bio: response.data.bio,
        email: response.data.email,
        twitter: response.data.twitter_username,
      });
    }, []);
  }

  componentDidUpdate() {
    console.log("Update!");
  }

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({
      friend: e.target.value,
    });
  };

  fetchFriend = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.friend}`)
      .then((response) => {
        this.setState({
          name: response.data.name,
          username: response.data.login,
          userImg: response.data.avatar_url,
          location: response.data.location,
          profile: response.data.html_url,
          followers: response.data.followers,
          following: response.data.following,
          bio: response.data.bio,
          email: response.data.email,
          twitter: response.data.twitter_username,
        });
      }, []);
  };

  render() {
    return (
      <div className="container">
        <h1>My Github Friends!</h1>
        <form onSubmit={this.fetchFriend}>
          <input type="text" onChange={this.handleChanges} />
          <button type="submit">Find Friend!</button>
        </form>
        <GithubCard friends={this.state} />
      </div>
    );
  }
}
export default App;
