import './style.css'
import pic from '../../assets/uncle.png'
function About(){
    return (
        <div>
            <div className='aboutUs'>
            <img src={pic} alt="" />
            <div className='aboutText'>
                <h2>About us</h2>
                <p>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. <br /> <br /> We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                <button>More on Our History</button>
            </div>
            </div>
    </div>
)
}

export default About;