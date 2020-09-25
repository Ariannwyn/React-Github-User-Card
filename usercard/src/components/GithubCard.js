import React from "react";

function GithubCard(props) {
  console.log("followers", props.followers);
  return (
    <div>
      {props.followers.map((friends, index) => {
        console.log("friends", friends);
        return (
          <div className="card" key={index}>
            <div className="card-info">
              <img src={friends.avatar_url} alt=""></img>
              <p>{friends.login}</p>
              <p>{friends.username}</p>
              <p>{friends.location}</p>
              <p>Profile:</p>
              <a href={friends.profile}></a>
              <p>{friends.followers}</p>
              <p>{friends.following}</p>
              <p>{friends.bio}</p>
              <p>{friends.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GithubCard;
