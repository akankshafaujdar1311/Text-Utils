
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert(
      {
        msg:message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success")
      //document.title="My-app Dark Mode";
      //for fluctuationcd 
     /* setInterval(() => {
        document.title="Your device has virus!!";
      }, 2000);
      setInterval(() => {
        document.title="Install anti-virus";
      }, 1500);*/
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
     // document.title="My-app Light Mode"
    }
  }
  return (
    <>
 <Navbar title="My-app" aboutText="about us" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
 <Textform showAlert={showAlert} heading=" TextUtils- word Counter, Character counter ,Remove extra spaces" mode={mode}/>
 </div>
</>
);
}

export default App;
