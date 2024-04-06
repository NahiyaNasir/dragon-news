
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
     const[categories,setCategories]=useState([])
     useEffect(()=>{
        fetch('categories.json')
        .then((res=>res.json()))
        .then((data=>setCategories(data)))
     },[])
    return (
        <div className=" space-y-3">
            <h3 className=" text-3xl text-center">  All Categories: {categories.length}</h3>
            {
                categories.map(category=><NavLink key={category.id}
                 className='block p-4 font-semibold'
                 to={`/category/${category.id}`}
                 >
                    {category.name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;