import logo from './logo.svg';
import './App.css';
import ViewStudents from './components/ViewStudents';
import Navbar from './components/Navbar';
import {  Route, Routes } from 'react-router-dom';
import AddStudents from './components/AddStudents';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'element={<ViewStudents/>} />
        <Route path='/add' 
        element={<AddStudents data={{sname:'',sgrade:''}} method="post"/>} />
      </Routes>
      
    </div>
  );
}

export default App;
