import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"

import Home from './components/pages/Home'
import Check from './components/pages/Search';

function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/Check' exact Component={Check} />
      </Routes>
    </Router>
  );
}

export default App;
