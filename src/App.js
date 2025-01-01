import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployForm from './Components/EmployForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccordionPage from './Components/AccordionPage';
// import EmployTable from './Components/EmployTable';



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployForm/>}/>
          {/* <Route path="/table" element={<EmployTable/>} employees={employees} filter={filter}/> */}
          <Route path="/list" element={<AccordionPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
