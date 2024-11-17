
import './App.css';
import Auth from './components/auth';
import Noor from './components/Noor';
import Yazan from './components/Yazan';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
        <Router>
          <Routes>
            <Route exact path='/' element={<Auth />} />  
            <Route path="/user1" element={<Noor />} /> 
            <Route path="/user2" element={<Yazan />} /> 
          </Routes>
        </Router>
  ) 
}

export default App
