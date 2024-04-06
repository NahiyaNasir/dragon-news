import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar";
import RightSightNav from "./Shared/RightSightNav";
import {useParams} from 'react-router-dom'

const ReadMore = () => {
    const {id}=useParams()
    console.log(id);
    return (
        <div>
            <Header></Header>
           <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                <h1> hello</h1>
                </div>
                <div>
                    <RightSightNav></RightSightNav>
                </div>
            </div>
        </div>
    );
};

export default ReadMore;