import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      action: "homework progate",
    },
    {
      id: 2,
      action: "homework progate 2",
    },
  ]);

  console.log(todos);

  const handle = (event) => {
    event.preventDefault();
    const isi = event.target.elements.input.value;

    setTodos([...todos, { id: todos.length + 1, action: isi }]);
    event.target.reset();
  };
  return (
    <div>
      <h1>To Do List App</h1>

      <div>
        <form onSubmit={handle}>
          <label>INPUT</label>
          <input
            type="text"
            name="input"
          />
          <button>Tambah</button>
        </form>
      </div>

      <ul>
        {todos.map((data) => (
          <li key={data.id}>{data.action}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
