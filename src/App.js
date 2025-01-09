import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleForm from './Formik practice/SimpleForm';
// import EmployForm from './Components/EmployForm';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AccordionPage from './Components/AccordionPage';




function App() {
  
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployForm/>}/>
          <Route path="/list" element={<AccordionPage/>}/>
        </Routes>
      </BrowserRouter> */}
    <SimpleForm/>
   
    </>
  );
};

export default App;
