import React from "react";
import "./../styles/App.css";
import ToDo from "./ToDoList.js"

function App() 
{
	return (
	<div id="main">
	{/* //Do not alter main div */}
	{/* //Please do not alter the functional component as tests depend on the type of component. */}
		<ToDo/>
	</div>
	);
}


export default App;
