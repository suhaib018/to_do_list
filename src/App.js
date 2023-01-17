import './App.css';
import { useState } from 'react';
import "./index"
function App() {
  const [data,setData] = useState([]);
  const [toDo,setToDo] = useState("");
  const [isEditable,setIsEditable] = useState(false);
  const [editableItem,setEditableItem] = useState();




  const handleSubmit = (e) =>{
    e.preventDefault(); 
    setData(prevData => [...prevData,{id:Math.random(),title:toDo}])
  }

  console.log("data",data);

  const handleClick = ()=>{
    data.map(i =>{
      if (i.id === editableItem)
        i.title = toDo;
    })
    setIsEditable(false);
  }

  const handleDelete =(id) =>{
    const newData =data.filter(task =>{
      return task.id !== id;
    })
    setData(newData);
  }

  const editClick = (id) =>{
    setEditableItem(id)
    setIsEditable(true)
  }
  return (
    <div className='container'>
      <div className='box-container'>
        <h2 style={{textAlign:"center"}}>To Do</h2>
        {isEditable?(
          <div className='center'>
          <input type="text" name="work"  onChange={(e) => setToDo(e.currentTarget.value)} />
          <button type='button' onClick={handleClick}>edit</button>
          </div>
          ):(
          <form onSubmit={handleSubmit} className='center'>
            <input type="text" name="work"  onChange={(e) => setToDo(e.currentTarget.value)} />
            <button type='submit' >Submit</button>   
          </form>
          )
        }
        {!!data.length && data.map(task=> (
           <div className='task-container'>
           <p >{task.title}</p>
           <div>
           <button onClick={() => handleDelete(task.id)}>Delete</button><button onClick={() => editClick(task.id)}>edit</button>
           </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default App;
