import React from 'react';  
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {  Route, BrowserRouter,Routes } from "react-router-dom";
import App from './App';
import Deploy_Single_image from './Deploy_Single_image';
import Mern_deployment from './Mern_deployment';
import Mongodb from './components/Mern_deployment_component/Mongodb';
import Node from './components/Mern_deployment_component/Node';
import Reactjs from './components/Mern_deployment_component/Reactd';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <>
  //   <App />
  // </>
  <BrowserRouter>
      <Routes>
        <Route path="/"element={<App />} />
        <Route path="/deploy"element={<Deploy_Single_image />} />
        <Route path="/Mern_deployment"element={<Mern_deployment />} />
        <Route path="/Mern_deployment/mongodb"element={<Mongodb />} />
        <Route path="/Mern_deployment/nodejs"element={< Node />} />
        <Route path="/Mern_deployment/reactjs"element={<Reactjs />} />
      </Routes>
    </BrowserRouter>
);
