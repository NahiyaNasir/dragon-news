import BrakingNews from "./BrakingNews";
import NewsCard from "./NewsCard";
import Header from "./Shared/Header";
import LeftSideNav from "./Shared/LeftSideNav";
import Navbar from "./Shared/Navbar";
import RightSightNav from "./Shared/RightSightNav";
import {useLoaderData }from 'react-router-dom'

const Home = () => {
    const news=useLoaderData();
    console.log(news);
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
                   {
                    news.map(singleNews=><NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                   }
                </div>
                <div className=" border">
                 <RightSightNav></RightSightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;