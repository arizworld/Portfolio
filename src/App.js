import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Background from './Components/Background';
import Ufo from './Components/Ufo';
import About from './Components/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Ufo/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Background/>
    </Router>
    </>
  );
}

export default App;
