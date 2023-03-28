import "./Deploy_Single_image.css";
import "./components/Home.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

const Deploy_Single_image = () => {
  const [openData, setOpenData] = useState({});
  const [awsData, setAwsData] = useState({});
  const [selectedOption, setSelectedOption] = useState("opensource");
  const [toggle, setToggle] = useState("opensource");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeService = (event) => {
    setSelectedOption(event.target.value);
    setToggle(event.target.value);
    console.log(selectedOption);
    console.log(toggle);
    if (toggle === "opensource") {
      setData(null);
    } else {
      setData(null);
    }
  };
  const handleChangeOpen = (event) => {
    setOpenData({
      ...openData,
      [event.target.name]: event.target.value,
    });
  };
  const handleChangeAws = (event) => {
    setAwsData({
      ...awsData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmitOpen = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setData(null);
    console.log("hello");
    console.log(data);
    if (!isLoading) {
      // axios.post("http://localhost:8000/api/k8s",{...openData})
      // .then((response) => {
      //   setData(response.data);
      // }).catch(err=>{console.log(err)}).finally(()=>{setIsLoading(false)})
      fetch("http://3.80.124.150:8000/api/k8s", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(openData, selectedOption),
      })
        .then((res) => res.json())
        .then((response) => {
          setData(response);
        })
        .catch(console.log)
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  const handleSubmitAws = (event) => {
    alert("wait for 20min");
    event.preventDefault();
    setIsLoading(true);
    setData(null);
    console.log(data);
    if (!isLoading) {
      fetch("http://3.80.124.150:8000/api/k8s", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(awsData, selectedOption),
      })
        .then((res) => res.json())
        .then((response) => {
          setData(response);
        })
        .catch(console.log)
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  const handelService = (event) => {
    event.preventDefault();
    fetch("http://3.80.124.150:8000/api/k8s")
      .then((res) => res.json())
      .then((response) => setData(response))
      .catch(console.log);
    console.log(data);
  };
  // useEffect(() => {
  //   fetch('http://localhost:8000/api/k8s').then(res => res.send())
  //     .then(data => setData(data));
  // },[]);

  return (
    <div>
      <Navbar />
      <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
      {/* <center>
        <h1>WELCOME TO ROBO-POD</h1>
      </center> */}
      <div className="main-form">
        <div className="form-div">
          <div className="form-group">
            <label>Select Your Service:</label>
            <select value={selectedOption} onChange={handleChangeService}>
              <option value="opensource">opensource</option>
              <option value="aws">aws</option>
              <option value="Openshift">Openshift</option>
              <option value="ROSA">ROSA</option>
            </select>
            {/* <br />
            <p>You selected: {selectedOption}</p> */}
          </div>
          <div>
            {toggle === "opensource" ? (
              <div>
                <form onSubmit={handleSubmitOpen}>
                  <div className="form-group">
                    <label className="label">Service:</label>
                    <input
                      type="text"
                      name="service"
                      onChange={handleChangeOpen}
                      value={(openData.service = selectedOption || "")}
                      readonly
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">ImageName:</label>
                    <input
                      type="text"
                      name="image"
                      onChange={handleChangeOpen}
                      value={openData.image || ""}
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">Pods:</label>
                    <input
                      type="text"
                      name="pods"
                      onChange={handleChangeOpen}
                      value={openData.pods || ""}
                    />
                  </div>

                  <button className="button" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            ) : toggle === "aws" ? (
              //TAKING INPUT FOR AWS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
              <div className="form">
                <form onSubmit={handleSubmitAws} className="form_input">
                  <div className="form_input">
                    <div className="form-group">
                      <label className="label">Service:</label>
                      <input
                        type="text"
                        name="service"
                        onChange={handleChangeAws}
                        value={(awsData.service = selectedOption || "")}
                        readonly
                      />
                    </div>
                    <div className="form-group">
                      <label className="label">ClusterName:</label>
                      <input
                        type="text"
                        name="clusterName"
                        onChange={handleChangeAws}
                        value={awsData.clusterName || ""}
                      />
                    </div>
                    <div className="form-group">
                      <label className="label">Machine:</label>
                      <input
                        type="text"
                        name="machine"
                        onChange={handleChangeAws}
                        value={awsData.machine || ""}
                      />
                    </div>
                    <div className="form-group">
                      <label className="label">Nodes:</label>
                      <input
                        type="text"
                        name="nodes"
                        onChange={handleChangeAws}
                        value={awsData.nodes || ""}
                      />
                    </div>
                    <div className="form-group">
                      <label className="label">ImageName:</label>
                      <input
                        type="text"
                        name="image"
                        onChange={handleChangeAws}
                        value={awsData.image || ""}
                      />
                    </div>
                    <div className="form-group">
                      <label className="label"> Pods:</label>
                      <input
                        type="text"
                        name="pods"
                        onChange={handleChangeAws}
                        value={awsData.pods || ""}
                      />
                    </div>
                  </div>
                  <button className="button" type="submit">
                    Submit_Aws
                  </button>
                </form>
              </div>
            ) : toggle === "Openshift" ? (
              <div>Coming soon Openshift Service</div>
            ) : toggle === "ROSA" ? (
              <div>Coming soon ROSA Service</div>
            ) : null}
          </div>
          {isLoading && <div className="result-data-wrapper">Loding...</div>}
          {data ? (
            <div className="result-data-wrapper">
              <div className="app-link">
                App Link:-&nbsp;
                <a target="_blank" rel="noreferrer" href={data?.url}>
                  {data.url}
                </a>
              </div>
              <button type="submit" onClick={handelService}>
                Refresh service
              </button>
            </div>
          ) : (
            !isLoading && (
              <div className="result-data-wrapper">No Link is Present</div>
            )
          )}
        </div>
      </div>
      {/* {isLoading?<div></div>:<button type='submit' onSubmit={handelService}>Refresh service</button>} */}
    </div>
  );
};

export default Deploy_Single_image;
