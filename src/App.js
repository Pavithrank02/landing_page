
import {BasicCard} from './components/BasicCard';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';

function App() {
  return (
    
        <Routes>
        <Route path="/" element={<BasicCard />} />
          <Route path="/home" element={<Home />} />
        </Routes>


  );
}

export default App;
