
import  { useState } from 'react';

function Todo() {
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    if (editIndex === null) {
      setTask([...task, text]);
    } else {
      const updateTask = [...task];
      updateTask[editIndex] = text;
      setTask(updateTask);
      setEditIndex(null);
    }

    setText("");
  };

  const handleEdit = (index) => {
    setText(task[index]);
    setEditIndex(index);
  };

  const handleDelete = (id) => {
    setTask((prev) =>
      prev.filter((_, index) => index !== id)
    );

    if (editIndex === id) {
      setEditIndex(null);
      setText("");
    } else if (editIndex !== null && editIndex > id) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <div>
      <h1>To Do</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
        />

        <button type="submit">
          {editIndex === null ? "Submit" : "Update"}
        </button>
      </form>

      {task.map((item, index) => (
        <div key={index}>
          <h2>
            {item}

            <button onClick={() => handleEdit(index)}>
              Edit
            </button>

            <button onClick={() => handleDelete(index)}>
              Delete
            </button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Todo;
