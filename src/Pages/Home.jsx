import BrakingNews from "./BrakingNews";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import Navbar from "./Shared/Navbar";
import RightSightNav from "./Shared/RightSightNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <h6> this is home</h6>
            <div className=" grid lg:grid-cols-4 gap-6">
                <div className=" border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h1 className=" text-6xl"> hellow</h1>
                </div>
                <div className=" border">
                 <RightSightNav></RightSightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;