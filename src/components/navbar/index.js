
import './style.css';
// import pic from '../../assets/Hero.png';
import logo from '../../assets/logo.png'
function NavBar() {
    return( <div>
        <div className='navBar'>
        <div className='logo-Text'>
        <img src={logo} alt="" />
        <span><i>The</i>Box</span>
        </div>
        <div className='navLinks'>
            <a href="javascript:void(0)">Home</a>
            <a href="javascript:void(0)">About Us</a>
            <a href="javascript:void(0)">Projects</a>
            <a href="javascript:void(0)">Services</a>
            <a href="javascript:void(0)">Contact Us</a>
        </div>
        </div>
        {/* <img src={pic} alt="hero pic" className='' /> */}
    </div>
    )
   
}

export default NavBar;