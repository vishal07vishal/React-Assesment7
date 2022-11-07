import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from './Components/Contact';
import Home from './Components/Home';
import Navs from './Components/Navs';
import Student from './Components/Student';
import './Components/style.css';







function App() {
  return (
    <div className="App">
   <h1 className='mt-2 mb-3 text-center'>Student Management System</h1>
  
   <BrowserRouter>
    <Navs/>
   <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/student' element={<Student/>}/>
    <Route path='/contact' element={<Contact/>}/>

  

   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;