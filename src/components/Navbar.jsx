import './Navbar.css';
import img_1 from './images/πby3_logo2.0.svg';
import { Link } from 'react-router-dom';
import Loginform from './Loginform';

/* <img src={img_1} alt="" srcset="" /> */


function Navbar() {

    
    return (
        <>
           
            <div className="navsection">
                <Link to="/"><img src={img_1} alt="robopod_image" srcset="" /></Link>
                <h2>RoboPod</h2>
                {/* <button class="button-64" role="button"><span class="text">Login</span></button> */}
                <Loginform />
            </div>
        </>
    );
}

export default Navbar;