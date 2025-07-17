import React from "react";
import person3 from "../assets/person3.jpg";
import "./Post.css";
import post from "../assets/post.jpg";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { FaRegCommentAlt } from "react-icons/fa";

const Post = () => {
  return (
    <div className="post-container bg-[#fff] rounded-md ">
      <div className="post-profile-section">
        <div className="post-profile-img">
          <img
            src={person3}
            alt=""
            width="40px"
            height="40px"
            className="rounded-full"
          />
        </div>
        <div className="post-person-data">
          <h1>Frances Guerrero</h1>
          <h6>2 hours ago</h6>
        </div>
      </div>
      <div className="post-info">
        <h2>
          I'm thrilled to share that I've completed a graduate certificate
          course in project management with the president's honor roll.
        </h2>
      </div>
      <div
        className="post-img flex flex-wrap justify-center items-center"
        style={{ maxWidth: "750px", maxHeight: "375px", padding: "10px 0px" }}
      >
        <img src={post} alt="" className="rounded-md" />
      </div>
      <div className="bar">
        <div className="like"><SlLike />like</div>
        <div className="dislike"><SlDislike />Dislike</div>
        <div className="comment"><FaRegCommentAlt />comment</div>
      </div>
      <br />
      {/* second post */}
      <div className="post-profile-section">
        <div className="post-profile-img">
          <img
            src={person3}
            alt=""
            width="40px"
            height="40px"
            className="rounded-full"
          />
        </div>
        <div className="post-person-data">
          <h1>Frances Guerrero</h1>
          <h6>2 hours ago</h6>
        </div>
      </div>
      <div className="post-info">
        <h2>
          I'm thrilled to share that I've completed a graduate certificate
          course in project management with the president's honor roll.
        </h2>
      </div>
      <div
        className="post-img flex flex-wrap justify-center items-center"
        style={{ maxWidth: "750px", maxHeight: "375px", padding: "10px 0px" }}
      >
        <img src={post} alt="" className="rounded-md" />
      </div>
      <div className="bar">
        <div className="like"><SlLike />like</div>
        <div className="dislike"><SlDislike />Dislike</div>
        <div className="comment"><FaRegCommentAlt />comment</div>
      </div>
      <br />
      <div className="post-profile-section">
        <div className="post-profile-img">
          <img
            src={person3}
            alt=""
            width="40px"
            height="40px"
            className="rounded-full"
          />
        </div>
        <div className="post-person-data">
          <h1>Frances Guerrero</h1>
          <h6>2 hours ago</h6>
        </div>
      </div>
      <div className="post-info">
        <h2>
          I'm thrilled to share that I've completed a graduate certificate
          course in project management with the president's honor roll.
        </h2>
      </div>
      <div
        className="post-img flex flex-wrap justify-center items-center"
        style={{ maxWidth: "750px", maxHeight: "375px", padding: "10px 0px" }}
      >
        <img src={post} alt="" className="rounded-md" />
      </div>
      <div className="bar">
        <div className="like"><SlLike />like</div>
        <div className="dislike"><SlDislike />Dislike</div>
        <div className="comment"><FaRegCommentAlt />comment</div>
      </div>
      <br />
      <div className="post-profile-section">
        <div className="post-profile-img">
          <img
            src={person3}
            alt=""
            width="40px"
            height="40px"
            className="rounded-full"
          />
        </div>
        <div className="post-person-data">
          <h1>Frances Guerrero</h1>
          <h6>2 hours ago</h6>
        </div>
      </div>
      <div className="post-info">
        <h2>
          I'm thrilled to share that I've completed a graduate certificate
          course in project management with the president's honor roll.
        </h2>
      </div>
      <div
        className="post-img flex flex-wrap justify-center items-center"
        style={{ maxWidth: "750px", maxHeight: "375px", padding: "10px 0px" }}
      >
        <img src={post} alt="" className="rounded-md" />
      </div>
      <div className="bar">
        <div className="like"><SlLike />like</div>
        <div className="dislike"><SlDislike />Dislike</div>
        <div className="comment"><FaRegCommentAlt />comment</div>
      </div>
      <br />
      <div className="post-profile-section">
        <div className="post-profile-img">
          <img
            src={person3}
            alt=""
            width="40px"
            height="40px"
            className="rounded-full"
          />
        </div>
        <div className="post-person-data">
          <h1>Frances Guerrero</h1>
          <h6>2 hours ago</h6>
        </div>
      </div>
      <div className="post-info">
        <h2>
          I'm thrilled to share that I've completed a graduate certificate
          course in project management with the president's honor roll.
        </h2>
      </div>
      <div
        className="post-img flex flex-wrap justify-center items-center"
        style={{ maxWidth: "750px", maxHeight: "375px", padding: "10px 0px" }}
      >
        <img src={post} alt="" className="rounded-md" />
      </div>
      <div className="bar">
        <div className="like"><SlLike />like</div>
        <div className="dislike"><SlDislike />Dislike</div>
        <div className="comment"><FaRegCommentAlt />comment</div>
      </div>
      <br />
    </div>
  );
};

export default Post;
