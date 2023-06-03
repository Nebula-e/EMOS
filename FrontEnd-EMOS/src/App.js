import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import DashboardComponent from './components/DashboardComponent';
import DepartmentComponent from './components/DepartmentComponent';
import JobsComponent from './components/JobsComponent';

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent/>
            <div className="container">
              <Routes>
                 <Route path = '/dashboard' element = {<DashboardComponent/>}></Route>
                 <Route path = '/' element = {<DashboardComponent/>}></Route>
                 <Route path = '/department' element = {<DepartmentComponent/>}></Route>
                 <Route path = '/jobs' element = {<JobsComponent/>}></Route>
                 <Route path = '/employees' element = {<EmployeeComponent/>}></Route>

                 {/* {<DashboardComponent/>} */}
              </Routes>    
                
            </div>
          <FooterComponent/>
        </div>
      </Router>
    </div>
  );
}

export default App;
