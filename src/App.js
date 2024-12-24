import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import EmpForm from './Components/EmpForm';
import Table from './Components/Table';
// import EmpForm from './Components/EmpForm';
import NavBar from './Components/NavBar';
// import Table from './Components/Table';
function App() {
  return (
    <>
    {/* <EmpForm/> */}
    
    <Router>
    <NavBar/>
      <Routes>
        <Route exact path='/form' element={<EmpForm />}/>
        <Route exact path='/table' element={<Table />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
