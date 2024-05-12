import { useState } from "react";

const AddTodo = ({ onAddButtonClick }) => {
  const [todoname, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTitileChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChance = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (todoname == "" || todoDate =="") {
      alert("Enter a task !!")
    } else {
      onAddButtonClick(todoname, todoDate);
      setTodoName("");
      setTodoDate("");
    }
    
  };
  return (
    <div className="container">
      <input type="text" placeholder="Enter a task here..." value={todoname} onChange={handleTitileChange} />
      <input type="date" value={todoDate} onChange={handleDateChance} />
      <input type="button" value="Add Task" onClick={handleAddButtonClick} />
    </div>
  );
};

export default AddTodo;
