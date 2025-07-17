import img from "../assets/postimg.jpg";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { MdVideoCameraBack } from "react-icons/md";
import { BsCalendar3EventFill } from "react-icons/bs";
import { MdOutlineEmojiEmotions } from "react-icons/md";

function Addpost() {
  return (
    <>
      <div className="addpost bg-white p-3 ">
        <div className="thought flex p-5  ">
          <img
            src={img}
            alt="img"
            width="35px"
            height="35px "
            className="rounded-full"
          />
          <input
            type="text"
            placeholder="share your thought"
            className=" w-115 h-10 ml-3 border-none outline-none bg-transparent"
          />
        </div>

        <div className="media flex">
          <div className="photo ml-5 p-2 flex items-center gap-2 rounded-lg bg-gray-100">
            <MdPhotoSizeSelectActual />
            <h3>Photos</h3>
          </div>
          <div className="video ml-5 p-2 flex items-center gap-2 rounded-lg bg-gray-100">
            <MdVideoCameraBack />
            <h3>Video</h3>
          </div>
          <div className="event ml-5 p-2 flex items-center gap-2 rounded-lg bg-gray-100">
            <BsCalendar3EventFill />
            <h3>Events</h3>
          </div>
          <div className="emoji ml-5 p-2 flex items-center gap-2 rounded-lg bg-gray-100"> 
            <MdOutlineEmojiEmotions />
            <h3>Emoji</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addpost;