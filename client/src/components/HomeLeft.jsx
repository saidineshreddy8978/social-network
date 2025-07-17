import cover from "../assets/background-img.jpeg";
import img from "../assets/postimg.jpg";
import profile from "../assets/profile-social.jpg";
import { FcHome } from "react-icons/fc";
import { FaUserFriends } from "react-icons/fa";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { BsCalendar4Event } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import "./Home.css";
import { useState, useEffect } from "react";

import axios from "axios";

function Homeleft() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await axios.get(
          "http://localhost:5000/userdata/data",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUser(response.data);
      } catch (error) {
        console.error(
          "Error fetching user data:",
          error.response?.data || error.message
        );
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className="leftcontainer relative holeleft">
        <div className="coverimg">
          <img
            src={cover}
            alt="coverimg"
            className="object-cover h-18 w-full rounded-lg"
          />
        </div>
        <div className="info flex flex-col items-center justify-center mt-16 p-3">
          <div className="profileimg absolute left-1/2 top-12 transform -translate-x-1/2">
            <img
              src={profile}
              alt="profileimg"
              className="w-16 h-16 border-2 border-white rounded-full"
            />
          </div>
          <div className="content text-center">
            <h3 className="text-xl font-semibold">{user?.name}</h3>
            <h5 className="text-lg text-gray-600">{user?.role}</h5>
            <div className="about border-b-1 border-black p-4">
              <p className="text-sm text-gray-700 items-center p-4">
              {user?.bio}
              </p>

              <div className="followerdata flex ml-3 mb-3 mt-3">
                <div className="posts p-4 border-r-1 border-black">
                  <h2 className="font-semibold">300</h2>
                  <h3>Posts</h3>
                </div>
                <div className="followers p-4 border-r-1 border-black">
                  <h2 className="font-semibold">5K</h2>
                  <h3>Followers</h3>
                </div>
                <div className="following p-4  border-r-1 border-black ">
                  <h2 className="font-semibold">1k</h2>
                  <h3>following</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sections ml-8 border-b-1  boder-black p-3 mr-4">
          <div className="feed flex items-center gap-5 mb-3">
            <FcHome className="w-5 h-5" />
            <h4 className="w-9 h-4 text-gray-800 font-semibold">Feed</h4>
          </div>
          <div className="connections flex items-center gap-5 mb-3">
            <FaUserFriends className="w-5 h-5" />
            <h4 className="w-9 h-4 text-gray-800 font-semibold">Connections</h4>
          </div>
          <div className="latestnews flex items-center  gap-5 mb-3">
            <HiGlobeAsiaAustralia className="w-5 h-5" />
            <h4 className="w-9 h-4 text-gray-800 font-semibold">LatestNews</h4>
          </div>
          <div className="events flex items-center gap-5 mb-3">
            <BsCalendar4Event className="w-5 h-5" />
            <h4 className="w-9 h-4 text-gray-800 font-semibold">Events</h4>
          </div>
          <div className="groups flex items-center gap-5 mb-3">
            <BiMessageSquareDetail className="w-5 h-5" />
            <h4 className="w-9 h-4 text-gray-800 font-semibold">Groups</h4>
          </div>
          <div className="setting flex items-center gap-5 mb-3">
            <FiSettings className="w-5 h-5" />
            <h4 className="w-9 h-4 text-gray-800 font-semibold">Settings</h4>
          </div>
        </div>

        <div className="Viewprofile flex justify-center p-4">
          <button> View Profile</button>
        </div>
      </div>
    </>
  );
}

export default Homeleft;
