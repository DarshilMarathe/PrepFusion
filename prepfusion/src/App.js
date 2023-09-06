import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Homepage from './pages/homepage/Homepage';
import Mlpredictor from './pages/mlpredictor/Mlpredictor';
import  Problemset from './pages/problemset/Problemset';


function App() {
  return (
   <>
   <Navbar/>

    <Routes>
      <Route path='/' element = {<Homepage/>} />
      <Route path='/problemset' element = {<Problemset/>} />
      <Route path='/upload' element = {<Mlpredictor/>} />
    </Routes>

   <Footer/>


   </>
  );
}

export default App;
