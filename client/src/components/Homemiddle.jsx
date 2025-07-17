import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";
import Stories from "./Stories";


const HomeMiddle = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <Stories/>
      <AddPost />
      <Post />
    </div>
  );
};

export default HomeMiddle;
