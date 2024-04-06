import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary" > Braking News</button>
            <Marquee speed={100} pauseOnHover={true}>
        <h3> react dow</h3>
  </Marquee>
        </div>
    );
};

export default BrakingNews;