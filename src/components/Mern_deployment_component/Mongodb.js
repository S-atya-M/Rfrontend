import React, { useState } from "react";
// import Navbar from '.s';
// import './Mern_deployment.css';
import "./all_css.css";

const Mongodb = () => {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [Storage, setStorage] = useState("");
  // const [Service, setService] = useState("");
  // const [App, setApp] = useState("");
  // const [Container, setContainer] = useState("");
  const [mongoData, setMongoData] = useState({});
  //const [data, setData] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeMongo = (event) => {
    setMongoData({
      ...mongoData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitMongo = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setData(null);
    if (!isLoading) {
      fetch("http://3.80.124.150:8000/api/mern/mongo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mongoData),
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          setData(response);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
      {/* <center><h1>Fill Form information</h1></center> */}
      <div className="main_sectionnnn">
        <div class="container">
          <div class="title">Information</div>
          <div class="content">
            <form onSubmit={handleSubmitMongo}>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Username</span>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your username for mongoDB "
                    onChange={handleChangeMongo}
                    value={mongoData.username || ""}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Password</span>
                  <input
                    type="Password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChangeMongo}
                    value={mongoData.password || ""}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Storage</span>
                  <input
                    type="text"
                    name="storage"
                    placeholder="Enter your Storage"
                    onChange={handleChangeMongo}
                    value={mongoData.storage || ""}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Service Name</span>
                  <input
                    type="text"
                    name="service"
                    placeholder="Enter your Service Name"
                    onChange={handleChangeMongo}
                    value={mongoData.service || ""}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">App Name</span>
                  <input
                    type="text"
                    name="appname"
                    placeholder="Enter your App Name"
                    onChange={handleChangeMongo}
                    value={mongoData.appname || ""}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Container Name</span>
                  <input
                    type="text"
                    name="containername"
                    placeholder="Enter your Container Name"
                    onChange={handleChangeMongo}
                    value={mongoData.containername || ""}
                    required
                  />
                </div>
              </div>
              <button class="button" type="submit">
                Submit
              </button>
            </form>
            {/* <div className="result-data-wrapper">No Link is Present</div> */}
            {isLoading && <div className="result-data-wrapper">Loding...</div>}
            {data ? (
              <div className="result-data-wrapper">
                <div className="app-link">
                  App Link:-&nbsp;
                  <a target="_blank" rel="noreferrer" href={data?.url}>
                    {data.url}
                  </a>
                </div>
                {/* <button type="submit" onClick={handelService}>
                  Refresh service
                </button> */}
              </div>
            ) : (
              !isLoading && (
                <div className="result-data-wrapper">No Link is Present</div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mongodb;
