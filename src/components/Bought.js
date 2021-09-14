import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Bought() {
  function handleClick() {
    alert(
      "These social icons don't go anywhere. Maybe one day, if Big Ducking Ducks becomes real.. 😫"
    );
  }
  return (
    <div className="boughtScreen">
      <h1>Very Niceee.</h1>
      <p>Your Ducks are on the way!</p>
      <p>
        Please leave us a comment on our socials to let us know how we're doing.
      </p>
      <div className="socials">
        <FontAwesomeIcon
          icon={["fab", "facebook-square"]}
          onClick={handleClick}
        />
        <FontAwesomeIcon
          icon={["fab", "instagram-square"]}
          onClick={handleClick}
        />
        <FontAwesomeIcon
          icon={["fab", "twitter-square"]}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Bought;
