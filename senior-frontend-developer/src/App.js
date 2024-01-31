
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import SEttings from './pages/Settings';
import About from './pages/About';


function App() {
  return (
    <>
   
    <Router>
    <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<SEttings />} />
      <Route path="/about" element={<About />} />
      
      </Routes>
</Router>
</>
  
  );
}

export default App;
