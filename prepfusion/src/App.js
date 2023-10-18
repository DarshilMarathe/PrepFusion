import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import Mlpredictor from './pages/mlpredictor/Mlpredictor';
import Problemset from './pages/problemset/Problemset';
import Login from './pages/login/Login'
import Signin from './pages/signin/Signin'
import UserDashboard from './pages/UserDashboard/UserDashboard';
import Statistics from './pages/statistics/Statistics';
import Resources from './pages/resources/Resources';
import GetPremium from './pages/GetPremium/GetPremium';
import FAQ from './pages/faq/FAQ';
import ToastNotification from './components/ToastNotification';
import Bookmarks from './pages/bookmarks/Bookmarks'

function App() {
  return (
   <>
   <Navbar/>
   <ToastNotification/>

    <Routes>
      <Route path='/' element = {<Homepage/>} />
      <Route path='/login' element = {<Login/>} />
      <Route path='/signup' element = {<Signin/>} />
      <Route path='/problemset' element = {<Problemset/>} />
      <Route path='/upload' element = {<Mlpredictor/>} />
      <Route path='/statistics' element = {<Statistics/>} />
      <Route path='/user' element = {<UserDashboard/>} />
      <Route path='/resources' element = {<Resources/>} />
      <Route path='/getPrepPro' element = {<GetPremium/>} />
      <Route path="/frequentQuestions" element={<FAQ/>} />
      <Route path="/bookmarks" element={<Bookmarks/>} />
    </Routes>

   <Footer/>


    </>
   );
 }



// import React from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";


// function App() {
//   const notify = () => {
//     toast("Default Notification !");

//     toast.success("Success Notification !", {
//       position: toast.POSITION.TOP_CENTER
//     });

//     toast.error("Error Notification !", {
//       position: toast.POSITION.TOP_LEFT
//     });

//     toast.warn("Warning Notification !", {
//       position: toast.POSITION.BOTTOM_LEFT
//     });

//     toast.info("Info Notification !", {
//       position: toast.POSITION.BOTTOM_CENTER
//     });

//     toast("Custom Style Notification with css class!", {
//       position: toast.POSITION.BOTTOM_RIGHT,
//       className: 'foo-bar'
//     });
//   };

 

export default App;
