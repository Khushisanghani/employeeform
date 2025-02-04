import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Redux crud/Sidebar';
import './Redux crud/Sidebar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployForm from './Components/EmployForm';
import AccordionPage from './Components/AccordionPage';
function App() { 
  return (
    <>
      <div className='d-flex'>
        <div className='d-flex flex-column sidebar'>
          <Sidebar/>
        </div>
        <div className='content container'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<EmployForm/>}/>
              <Route path="/list" element={<AccordionPage/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      
       
    </>
  );
};

export default App;
