import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const apiurl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [Login, setlogin] = useState({ email: "", password: "" });

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const logindata = await axios.post(`${apiurl}/auth/login`, Login);
      localStorage.setItem("token",logindata.data.token)
      // console.log("Success:", logindata.data.token);
      navigate("/home");

      setlogin({ email: "", password: "" });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.error);
        console.error("Status Code:", error.response.status);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="login flex flex-col items-center
         p-6 border border-gray-300 rounded-lg bg-white gap-5 p-20"
      >
        <h2 className="text-3xl font-semibold">Login</h2>
        <h5>
          Dont have an account? Please
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : " link font-medium text-lg ml-2"
            }
          >
            Signup
          </NavLink>
        </h5>
        <div className="inputbox flex flex-col gap-6 w-full">
          <input
            type="email"
            placeholder="Enter your Mail"
            className="p-3 w-90 border border-gray-400 rounded-lg"
            onChange={(e) => {
              setlogin({ ...Login, email: e.target.value });
            }}
            value={Login.email}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="p-3 w-90 border border-gray-400 rounded-lg"
            onChange={(e) => {
              setlogin({ ...Login, password: e.target.value });
            }}
            value={Login.password}
          />
          <button
            type="submit"
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

export default Login;