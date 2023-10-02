import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import Mlpredictor from './pages/mlpredictor/Mlpredictor';
import  Problemset from './pages/problemset/Problemset';
import Login from './pages/login/Login'
import Signin from './pages/signin/Signin'
import UserDashboard from './pages/UserDashboard/UserDashboard';
import Statistics from './pages/statistics/Statistics';
import Resources from './pages/resources/Resources';
import Pay from './pages/pay/Pay';
import Tester from './pages/pay/Tester';



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
      <Route path='/statistics' element = {<Statistics/>} />
      <Route path='/user' element = {<UserDashboard/>} />
      <Route path='/resources' element = {<Resources/>} />
      <Route path='/pay' element = {<Pay/>} />
      <Route path='/tester' element = {<Tester/>} />
    </Routes>

   <Footer/>


   </>
  );
}

export default App;
