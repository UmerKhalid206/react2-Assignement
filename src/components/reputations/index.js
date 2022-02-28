import './style.css'
import logo from '../../assets/icon.png'
import logo2 from '../../assets/icon2.png'
function OurReputations(){
    return (
        <div>
        <h4>Our Reputation</h4>
        <div className='cards'>
        <div className='card'>
            <img src={logo} alt="" /><br />
            <span className='cardHead'>Best Services</span><br />
            <p className='description'>Nullam senectus porttitor in <br /> eget. Eget rutrum leo interdum.</p>
        </div>

        <div className='card'>
            <img src={logo} alt="" /><br />
            <span className='cardHead'>Best Teams</span><br />
            <p className='description'>Nullam senectus porttitor in <br /> eget. Eget rutrum leo interdum.</p>
        </div>

        <div className='card'>
            <img src={logo2} alt="" /><br />
            <span className='cardHead'>Best Designs</span><br />
            <p className='description'>Nullam senectus porttitor in <br /> eget. Eget rutrum leo interdum.</p>
        </div>
        </div>
    </div>
)
}

export default OurReputations;