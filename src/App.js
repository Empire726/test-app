import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';




function App() {
  const [name, setName] = useState(""); 
  const [category, setCategory] = useState("");
  

  return (
    
    <BrowserRouter>
     <Header/>
     <Routes >
        
        <Route exact path="/" element={<Home name={name} setName={setName} category={category} setCategory={setCategory} />}/>

        </Routes>
    <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
