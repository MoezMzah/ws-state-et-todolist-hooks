import React,{useState} from 'react'
import Counter2 from './Counter2'
import "./App.css";
const App = () => {
  const [show,setShow]=useState(false)
  return (
    <div className="App">
      <button className="visibility-btn"  onClick={()=>setShow(!show)}>

         {show? "Hide Counter" :  "Show Counter"}
      </button>
   {show && <Counter2 />}
    </div>
  )
}

export default App
