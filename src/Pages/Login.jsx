import { Link ,useLocation} from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import { useNavigate } from "react-router-dom";
const Login = () => {
   const navigate=useNavigate()
   const location=useLocation()
  const {signIn}=useContext(AuthContext)
     const handelLogin=(e)=>{
e.preventDefault()
console.log( e.currentTarget);
const from=new FormData(e.currentTarget)
const email=from.get('email')
const password=from.get('password')
console.log(email,password);
          signIn(email,password)
          .then(result=>console.log(result.user))
          .catch(error=>console.error(error))
          navigate( location?.state?  location.state :'/')
     }
    return (
        <div >
            <Navbar></Navbar>
           <div className="text-center my-10 ">
            <h1 className="text-3xl">please login</h1>
            <form className="card-body lg:w-1/2 md:w-3/4 mx-auto" onSubmit={handelLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password"name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
       
        <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">Login</button>
        </div>
      </form>
         <p>Do not Have any Account please<Link to='/register' className="text-primary">Register</Link></p>   
  </div>
</div>
        
    
    );
};

export default Login;