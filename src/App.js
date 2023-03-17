import img from './image/wave.png'
import BasicCard from './components/BasicCard';
import './App.css';

function App() {
  return (
    <div >
    <div className='wave'>
      <img style={{width: '1600px'}} src={img} alt="gshs"/>
    </div>

    <BasicCard />

    </div>


  );
}

export default App;
