
import {BasicCard} from './components/BasicCard';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Posts from './components/Posts';
import Gallery from './components/Gallery';

function App() {
  return (
    
        <Routes>
        <Route path="/" element={<BasicCard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/todo" element={<Gallery />} />
        </Routes>


  );
}

export default App;
