import Homemiddle from "./Homemiddle";
import "./Home.css";
import Homeleft from "./HomeLeft";
import HomeRight from "../components/HomeRight/HomeRight";

function Home() {
  return (
    <div className="home-container">
     <div className="about">
        <Homeleft />
      </div>
      <div className="posts ">
        <Homemiddle />
      </div>
      <div className="suggestion">
        <HomeRight />
      </div>
    </div>
  );
}

export default Home;
