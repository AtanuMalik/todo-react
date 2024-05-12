import TodoItem from "./TodoItem";
const AllTodoItems = ({ listItems, onDeleteClick }) => {
  return listItems.map((item) => (
    <TodoItem
      key={item.name}
      name={item.name}
      date={item.date}
      onDeleteClick={onDeleteClick}
    />
  ));
};

export default AllTodoItems;
