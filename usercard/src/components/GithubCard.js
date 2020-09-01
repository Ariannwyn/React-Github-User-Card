import React from "react";

class GithubCard extends React.Component {
  render() {
    console.log("card", this.props);
    return (
      <div className="card">
        <div className="card-info">
          <img src={this.props.friends.userImg} alt=""></img>
          <p>{this.props.friends.name}</p>
          <p>{this.props.friends.username}</p>
          <p>{this.props.friends.location}</p>
          <p>Profile:</p>
          <a href={this.props.friends.profile}></a>
          <p>{this.props.friends.followers}</p>
          <p>{this.props.friends.following}</p>
          <p>{this.props.friends.bio}</p>
          <p>{this.props.friends.email}</p>
        </div>
      </div>
    );
  }
}

export default GithubCard;
