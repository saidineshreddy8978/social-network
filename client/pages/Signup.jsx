import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [Signup, setSignup] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const apiurl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (Signup.password === Signup.confirmpassword) {

      const User = await axios.post(`${apiurl}/auth/signup`, Signup);
      console.log(User.data);
      navigate("/login");

    } else {
      alert("password miss match");
      
    }
    setSignup({ email: "", password: "", confirmpassword: "" });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="login flex flex-col items-center
         p-6 border border-gray-300 rounded-lg bg-white gap-5 p-20"
      >
        <h2 className="text-3xl font-semibold">Signup</h2>
        <h5>
          Already have an account? Please
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : " link font-medium text-lg ml-2"
            }
          >
            Login
          </NavLink>
        </h5>
        <div className="inputbox flex flex-col gap-6 w-full">
          <input
            type="email"
            placeholder="Enter your Mail"
            className="p-3 w-90 border border-gray-400 rounded-lg"
            onChange={(e) => {
              setSignup({ ...Signup, email: e.target.value });
            }}
            value={Signup.email}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="p-3 w-90 border border-gray-400 rounded-lg"
            onChange={(e) => {
              setSignup({ ...Signup, password: e.target.value });
            }}
            value={Signup.password}
          />
          <input
            type="password"
            placeholder="Confirm your Password"
            className="p-3 w-90 border border-gray-400 rounded-lg"
            onChange={(e) => {
              setSignup({ ...Signup, confirmpassword: e.target.value });
            }}
            value={Signup.confirmpassword}
          />
          <button
            className=" text-lg p-3 w-90 rounded-lg bg-blue-300 font-medium text-black hover:bg-blue-500 hover:text-white"
            onClick={(e) => handlesubmit(e)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;