/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
   console.log(news);
   const {thumbnail_url,title,details,_id}=news
    return (
        <div className=" mb-4">
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={thumbnail_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        details.length >200?
         <p> {details.slice(0,200)}<Link to={`news/${_id}`} className="text-primary"> Read More..</Link></p>
        :
        <p>{details}</p>
    }
    
  </div>
</div>
        </div>
    );
};

export default NewsCard;