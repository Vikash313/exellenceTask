import React, { useState, useEffect} from 'react'
import TodoList from './TodoList'
import Axios from 'axios'

export function Todo() {

    const [ todoItems, setTodoItems ] = useState("");
    const [ items, setItems ] = useState([]);
    const [apiData, setApiData] = useState([]);


    const itemEvent = (e)=> {
        setTodoItems(e.target.value)

    }

//Question: 4
  async function getData() {
      const response = await Axios.post('https://jsonplaceholder.typicode.com/users')
      .then((response) => response)
      .catch((error) => error)
      console.log("Respose",response)
      setApiData(response)
  }

  useEffect(() => {
    getData();
  }, [])

    

    const submitHandlers = () => {
        setItems((oldItems) => {
            return [...oldItems, todoItems];
        })
        setTodoItems(""); 
    }

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <h1 className="fs-1" >Todo</h1>
                <input type="text" placeholder="Enter your list" onChange={itemEvent} value={todoItems}/>
                <button type="submit" className="btn btn-success" onClick={submitHandlers}>Add todo</button>
              <ol>      
                  {items.map((itemval, index) => {
                   return <TodoList 
                   id={index} 
                   key={index} value={itemval} 
                       onSelect={deleteItems}
                   />
                  })}
              </ol>
        </div>
    )
}

export default Todo

