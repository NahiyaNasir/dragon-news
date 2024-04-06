import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { useContext } from "react";
import  { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
  const {createUser}=useContext(AuthContext)
 
     const handelRegister=(e)=>{
     
          e.preventDefault();
          //console.log( e.currentTarget);
const from=new FormData(e.currentTarget)
console.log(from);
const name=from.get('name')
const email=from.get('email')
const password=from.get('password')
console.log(email,password,name);
         createUser(email,password)
         .then(result=>console.log(result.user))
         .catch(error=>console.error(error))
     }
    return (
        <div>
           
            <Navbar></Navbar>
           <div className="text-center my-10 ">
            <h1 className="text-3xl">please Register</h1>
            <form className="card-body lg:w-1/2 md:w-3/4 mx-auto" onSubmit={handelRegister}>
            <div className="form-control">
        <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <button className="btn btn-primary" type="submit">Register</button>
        </div>
      </form>
        <p>Already have an Account please <Link to='/login' className=" text-primary">login</Link></p>
  </div>
        </div>
    );
};

export default Register;