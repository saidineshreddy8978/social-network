import React from "react";
import FriendSuggestion from "./FriendSuggestion";
import "./HomeRight.css";

const Suggestions = () => {
  return (
    <div className="suggestion-container bg-[#fff] rounded-md">
      <h1
        style={{
          marginLeft: "20px",
          paddingTop: "20px",
          fontWeight: "bold",
          fontSize: "17px",
          marginBottom: "5px",
        }}
      >
        Who to follow
      </h1>
      <FriendSuggestion />
    </div>
  );
};

export default Suggestions;
