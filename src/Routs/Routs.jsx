import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ReadMore from "../Pages/ReadMore";
import PriviteRout from "./PriviteRout";

 const router= createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: ()=>fetch('/news.json')
        },
        {
path:"/news/:id",
element:<PriviteRout><ReadMore></ReadMore></PriviteRout>
        },
        {
          path:"/login",
          element:<Login></Login>
        },{
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);
 export default router