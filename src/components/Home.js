import { Link } from 'react-router-dom';
import './Home.css';
import img_1 from './images/logo.png';
// import { Link } from "react-router-dom";
// import Single_image from './Single_image';
function Home(){

    return(
    <>
    
        <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        {/* <div id="title">
            <span>PURE CSS</span>
            <br/>
            <span>PARALLAX PIXEL BACKGROUND</span>
        </div> */}
        </section>
        <div className="main_home_section">
                <div className="left">
                    <div className="inner">
                        <h1>Robopod app</h1><br />
                        {/* <h3>deploy your single image or App </h3><br /> */}
                        {/* <h3>MEARN Deployment </h3><br /> */}
                        <Link to="/deploy"><button class="button" role="button"><span class="text">Deploy Your Single Image or App </span></button></Link> <br />
                        <Link to="/Mern_deployment"><button class="button"  role="button"><span class="text">MERN Deployment</span></button></Link>
                        
                        
                    </div>
                </div>
                <div className="right">
                    <img src={img_1} alt="robopod_image" srcset="" />
                </div>

        </div>
       
    </>
);
}


export default Home;
// export default FunctionDeclaration;