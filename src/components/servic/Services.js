import './style.css'
import pic from '../../assets/construction.png'
function Services(){
    return (
        
        <div>
            <div className='services'>
            <h4>Services</h4>
            <div className='servicesCards'>
                <div className='whiteCard'>
                    <img src={pic} alt="" /><br />
                    <p>Construction</p>
                </div>

            </div>
            </div>
    </div>
)
}

export default Services;