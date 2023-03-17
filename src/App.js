import img from './image/wave.png'
import {BasicCard} from './components/BasicCard';
import './App.css';

function App() {
  return (
    <div className='home'>
      <div className='wave'>
        <img style={{ width: '1600px', height: '100%' }} src={img} alt="gshs" />
      </div>
      <div className='card'>
        <BasicCard />
      </div>
    </div>


  );
}

export default App;
