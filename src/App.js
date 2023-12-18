import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time,setTime] = useState(new Date().toLocaleString());
  useEffect (()=>{
    const interval = setInterval(()=>{
      setTime(new Date().toLocaleString())
    },1000)
    return () => clearInterval(interval)
  },[])
  return (
    <div className="App">
      <header className="App-header">
        {time}
      </header>
    </div>
  );
}

export default App;
