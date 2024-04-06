 import logo from '../../../assets/logo.png'
import moment from 'moment'
const Header = () => {
    return (
        <div className=' text-center'>
       <img src={logo} alt=""  className='mx-auto'/>
       <h2>Journalism Without Fear or Favour</h2>
       <p className=" text-xl">{moment().format("dddd, MMMM D, YYYY,")}</p>
        </div>
    );
};

export default Header;