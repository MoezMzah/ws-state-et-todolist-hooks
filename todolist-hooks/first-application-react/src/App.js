import React,{useState} from 'react'
import AddInput from './AddInput'
import List from './List'


const App = () => {
  const [names, setNames] = useState([
    { name: "Mohamed", id: 0, editable: false },
    { name: "Ayoub", id: 1, editable: false },
    { name: "Eya", id: 2, editable: false },
  ]);
  // declarer 3 fonctions : editName, deleteName,add
  //add
  const add = (x) => {
    setNames([x,...names]);
  };
  //deleteName
const deleteName=(id)=>{
  setNames(names.filter((el)=>el.id!==id))
};
  //editName
  const editName=(id)=>{
    setNames(names.map((el)=>el.id===id? {...el,editable:!el.editable}:el))
  }
  return (
    <div className="App">
      <AddInput add={add} />
      <List editName={editName} deleteName={deleteName} names={names}/>
    </div>
  );
}

export default App
