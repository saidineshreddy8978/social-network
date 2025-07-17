import { useState } from "react";
import axios from "axios";

export default function UserDataForm() {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    age: "",
    bio: "",
    role: "",
    personalInfo: "",
  });

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiurl = import.meta.env.VITE_API_URL;

      console.log("User Data:", formData);
      const User = await axios.put(`${apiurl}/userdata/data`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log("User data updated successfully:", response.data);
      console.log(User);
    } catch (err) {
      console.log("User data updating error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-center mb-4">
            User Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
            <textarea
              name="bio"
              placeholder="Enter your bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            ></textarea>
            <input
              type="text"
              name="role"
              placeholder="Enter your role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
            <textarea
              name="personalInfo"
              placeholder="Enter your personal information"
              value={formData.personalInfo}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
