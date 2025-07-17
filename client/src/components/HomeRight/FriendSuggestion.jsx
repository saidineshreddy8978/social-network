import React from "react";
import person3 from "../../assets/person3.jpg";
import { IoMdAdd } from "react-icons/io";
import "./HomeRight.css";
import { useState, useEffect } from "react";
import axios from "axios";

const FriendSuggestion = () => {
  //all users data
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "http://localhost:5000/userdata/mydata",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(response.data);
    };

    fetchUserData();
  }, []);
  console.log(user);
  //updating following
  return (
    <div className="friend-container flex flex-col gap-y-4">
      {user.length > 0 ? (
        user.map((user) => (
          <div key={user.id} className="friend flex items-center justify-between w-full">
            <div className="profile-img flex items-center gap-2">
              <img
                src={user.profileImage || person3} // Use dynamic image
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="profile-details" style={{ maxWidth: "115px" }}>
                <h2 style={{ fontWeight: "bold", fontSize: "15px" }}>{user.name}</h2>
                <h3 style={{ fontSize: "11px", color: "#756F8F" }}>{user.role}</h3>
              </div>
            </div>
            <IoMdAdd
              color="blue"
              className="add-icon cursor-pointer"
              size={20}
              onClick={() => console.log(`Followed ${user.name}`)} 
            />
          </div>
        ))
      ) : (
        <p className="text-gray-500">No friend suggestions available.</p>
      )}
    </div>
  );
};

export default FriendSuggestion;
