import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#'
    }
  }  
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
