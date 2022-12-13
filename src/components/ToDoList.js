import React, {useState} from "react";
// import "./../styles/App.css";
// import img from "./../assets/edit.png"

// const editImg = require("./edit.png");
const ToDo = () => {
    const [toDoList, setToDoList] = useState([])
    const [task,setTask] = useState("")
    const [isEdit,setIsEdit] = useState(false)
    const [idx, setIdx] = useState()
    const [text, setText] =useState("")
    const textArea = (type)=>{
        switch(type){
            case "add-task":
                return (<div className="add-todo-container">
                <textarea id="task" rows="1" onChange={(event)=>{setTask(event.target.value)}} value={task} placeholder="Enter here...">{task}</textarea>
                <button id="btn" onClick={(event)=>{let temp={text:task,id:parseInt(Math.random()*10000)};;setToDoList([...toDoList,temp]); setTask("");;}} disabled={!task}>Add To-Do</button>
                </div>)
            case "edit-task":
                return(<div className="edit-todo-container">
                <textarea id="edit-task" rows="1" onChange={(event)=>{setText(event.target.value)}} value={text} placeholder="Enter here..." required>{text}</textarea>
                <button id="btn" onClick={(event)=>{let newToDo = toDoList.map((todo)=>{if(todo.id===idx) {
            return {id:idx,text:text};}
        else{return todo}})
        setToDoList(newToDo);setIsEdit(false);}} disabled={!text.length}>Ok</button>
                </div>)
        }
    }

    const removeTodo = (index) => {const newTodos = toDoList.filter((todo)=>{if(todo.id!==index){return todo}});setToDoList(newTodos);};
    const editTodo = (index) => {
        let temp = toDoList.filter((todo)=>{if(todo.id===index){return todo.text}})
        
        setText(temp[0].text)
        setIdx(index)
        setIsEdit(true)
      }
    return (
        <div id="ToDo-container">
            <h1>To-Do List</h1>
            {textArea(!isEdit?"add-task":"edit-task")}
            <br></br>
            {toDoList.map((todo)=>{
                return (
                <div className="task-container list" id={todo.id}>
                    <div className="task-text">{todo.text}</div>
                    <div className="task-control">
                    <button value={todo.id} className="delete" onClick={(event)=>{removeTodo(parseInt(event.target.value))}} disabled={isEdit}></button>
                    <button value={todo.id} className="edit" onClick={(event)=>{editTodo(parseInt(event.target.value))}} disabled={isEdit}></button>
                    
                    </div>
                </div>
                )
            })}
            

        </div>
    )
}

export default ToDo;