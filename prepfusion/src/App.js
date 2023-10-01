import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import Mlpredictor from './pages/mlpredictor/Mlpredictor';
import  Problemset from './pages/problemset/Problemset';
import Login from './pages/login/Login'
import Signin from './pages/signin/Signin'
import Tester from './pages/darshil_test/Tester';
import UserDashboard from './pages/UserDashboard/UserDashboard';



function App() {
  return (
   <>
   <Navbar/>

    <Routes>
      <Route path='/' element = {<Homepage/>} />
      <Route path='/login' element = {<Login/>} />
      <Route path='/signup' element = {<Signin/>} />
      <Route path='/problemset' element = {<Problemset/>} />
      <Route path='/upload' element = {<Mlpredictor/>} />
      <Route path='/tester' element = {<Tester/>} />
      <Route path='/user' element = {<UserDashboard/>} />
    </Routes>

   <Footer/>


   </>
  );
}

export default App;
