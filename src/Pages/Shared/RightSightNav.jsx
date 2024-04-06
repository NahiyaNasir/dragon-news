import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
 import userPic1 from '../../../assets/qZone1.png'
 import usePic2 from '../../../assets/qZone2.png'
 import userPic3 from '../../../assets/qZone3.png'
const RightSightNav = () => {
  return (
    <div>
      <div className="space-y-3">
        <h1 className=" text-2xl font-bold p-2">login</h1>
        <button className=" btn btn-outline w-full">
          <FaGoogle></FaGoogle> Goggle
        </button>
        <button className=" btn btn-outline w-full">
          <FaGithub></FaGithub> GitHub
        </button>
      </div>
      <div className=" p-4 mt-3  mb-6">
        <h1 className=" text-xl">find us on</h1>

        <a
          href=""
          className="flex text-lg p-4 items-center border-rounded-t-lg"
        >
          {" "}
          <FaFacebook className="mr-2"></FaFacebook>
          <span> Facebook</span>{" "}
        </a>
        <a
          href=""
          className="flex text-lg p-4 items-center border-rounded-t-lg"
        >
          {" "}
          <FaTwitter className="mr-2"></FaTwitter>
          <span> twiter</span>{" "}
        </a>
        <a
          href=""
          className="flex text-lg p-4 items-center border-rounded-t-lg"
        >
          {" "}
          <FaInstagram className="mr-2"></FaInstagram>
          <span> instagram</span>{" "}
        </a>
      </div>
      <div>
<img src={userPic1} alt="" />
<img src={usePic2}alt="" />
<img src={userPic3} alt="" />
      </div>
    </div>
  );
};

export default RightSightNav;
