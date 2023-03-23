import React, { useState } from "react";
// import Navbar from '.s';
// import './Mern_deployment.css';
import "./all_css.css";

const Reactd = () => {
  const [reactData, setReactData] = useState({});
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeReact = (event) => {
    setReactData({ ...reactData, [event.target.name]: event.target.value });
  };

  const handleSubmitReact = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setData(null);
    if (!isLoading) {
      fetch("http://3.80.124.150:8000/api/mern/react", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reactData),
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
            <form onSubmit={handleSubmitReact}>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Image name</span>
                  <input
                    type="text"
                    placeholder="Enter your ImageName"
                    name="image"
                    onChange={handleChangeReact}
                    value={reactData.image || ""}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Default port</span>
                  <input
                    type="number"
                    placeholder="Enter your Port"
                    name="port"
                    onChange={handleChangeReact}
                    value={reactData.port || ""}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Pods</span>
                  <input
                    type="text"
                    placeholder="Enter your Pods"
                    name="pods"
                    onChange={handleChangeReact}
                    value={reactData.pods || ""}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Service Name</span>
                  <input
                    type="text"
                    placeholder="Enter your Service Name"
                    name="service"
                    onChange={handleChangeReact}
                    value={reactData.service || ""}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">App Name</span>
                  <input
                    type="text"
                    placeholder="Enter your App Name"
                    name="appname"
                    onChange={handleChangeReact}
                    value={reactData.appname || ""}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Container Name</span>
                  <input
                    type="text"
                    placeholder="Enter your Container Name"
                    name="containername"
                    onChange={handleChangeReact}
                    value={reactData.containername || ""}
                    required
                  />
                </div>
              </div>
              <button className="button" type="submit">
                Submit
              </button>
            </form>
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

export default Reactd;
