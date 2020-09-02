import React from "react";
import axios from "axios";
import GithubCard from "./components/GithubCard";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: "ariannwyn",
      card: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.friend}`)
      .then((response) => {
        this.setState({
          card: response.data,
        });
      }, [])
      .catch((error) => console.log(error));
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

  onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.friend}/followers`)
      .then((response) => {
        this.setState({
          followers: [...this.state.followers, response.data],
        });
      }, [])
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="container">
        <h1>My Github Friends!</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.handleChanges} />
          <button type="submit">Find Friend!</button>
        </form>
        <GithubCard friends={this.state} />
      </div>
    );
  }
}
export default App;