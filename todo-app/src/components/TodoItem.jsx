function TodoItem({ name, date, onDeleteClick }) {
  return (
    <div className="list-item">
      <p>{name}</p>
      <p>{date}</p>
      <button className="delete" onClick={() => onDeleteClick(name)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
