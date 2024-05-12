import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import AllTodoItems from "./components/AllTodoItems";

function App() {
  const [listItems, setListItems] = useState([]);

  const handleAddItems = (newTitle, newDate) => {
    const newTodo = [...listItems, { name: newTitle, date: newDate }];
    setListItems(newTodo)
  };

  //Deleting items from the list
  const handleDeleteClick = (item) => {
    const newList = listItems.filter((x) => x.name !== item);
    setListItems(newList);
  };

  return (
    <div className="main">
      <h1>Todo App</h1>
      <AddTodo onAddButtonClick={handleAddItems} />
      <AllTodoItems listItems={listItems} onDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
