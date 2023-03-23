import "./components/Home.css";
import Navbar from "./components/Navbar";
import "./Mern_deployment.css";
import { Link } from "react-router-dom";

const Mern_deployment = () => {
  return (
    <>
      <Navbar />
      <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
      <br></br>
      <center>
        <h1>Welcome To MERN Deployment</h1>
      </center>
      <br></br>
      {/* <center><h1>Connect app</h1></center><br></br> */}
      <div className="main_section">
        <div className="information_section">
          <h1>Please follow below Instructions</h1>
          <ul>
            <li>Open Mongodb and Fill Form </li>
            <li>Copy Your url and Port of MongoDb</li>
            <li>
              Add like This
              mongodb://"Username":"Password"@IpOfMongo:portNumberOfMongo in
              NodeJS
            </li>
            <li>Make Docker Image of Your NodeJS</li>
            <li>GO to NodeJS Enter Details</li>
            <li>NoteDown Your Ip and Port</li>
            <li>
              Add like This http://ipOfNodejs:portOfNodejs in Your ReactJs
            </li>
            <li>Make Docker Image of Your ReactJS </li>
            <li>Go to ReactJs Enter your Details</li>
          </ul>
        </div>

        <div>
          <Link to="/Mern_deployment/mongodb">
            <button className="button">
              <span className="text">MONGODB</span>
            </button>{" "}
          </Link>
          <br></br>
          <Link to="/Mern_deployment/nodejs">
            <button className="button">
              <span className="text">NODEJS</span>
            </button>{" "}
          </Link>
          <br></br>
          <Link to="/Mern_deployment/reactjs">
            <button className="button">
              <span className="text">REACTJS</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Mern_deployment;
