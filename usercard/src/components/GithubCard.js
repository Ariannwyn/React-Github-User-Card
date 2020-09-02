import React from "react";

function GithubCard(props) {
  console.log(props.friends.followers);
  return (
    <div className="card">
      {props.friends.followers.map((friends) => (
        <div className="card-info" key={friends.id}>
          <img src={friends.userImg} alt=""></img>
          <p>{friends.name}</p>
          <p>{friends.username}</p>
          <p>{friends.location}</p>
          <p>Profile:</p>
          <a href={friends.profile}></a>
          <p>{friends.followers}</p>
          <p>{friends.following}</p>
          <p>{friends.bio}</p>
          <p>{friends.email}</p>
        </div>
      ))}
    </div>
  );
}

export default GithubCard;
