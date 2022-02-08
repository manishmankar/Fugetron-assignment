
import './App.css';
import Home from './Componet/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componet/NavBar/Navbar';
import Create from './Componet/update/Create';

function App() {
  return (
      
    <div className="App">
    <Router>
    <Navbar/>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        </Routes>
    </Router>
  </div>
    
  );
}

export default App;
