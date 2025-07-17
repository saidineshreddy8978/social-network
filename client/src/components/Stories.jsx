import React from "react";
import "./Stories.css"; 
import person3 from "../assets/person3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

const storiesData = [
  { id: 1, name: "Judy Nguyen", image: person3 },
  { id: 2, name: "Judy ",  image: person3  },
  { id: 3, name: "Amanda Reed",  image: person3  },
  { id: 4, name: "Billy Thompson",  image: person3  },
];

const Stories = () => {
  return (
    <div className="stories-container">
      {/* Post a Story */}
      <div className="story-card post-story">
        <div className="plus-sign">+</div>
        <p>Post a Story</p>
      </div>

      {/* Stories List */}
      {storiesData.map((story) => (
        <div key={story.id} className="story-card">
          <img src={story.image} alt={story.name} />
          <p>{story.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
