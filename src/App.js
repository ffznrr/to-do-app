import { useEffect, useState } from "react";

function App() {
  const initialTodos = JSON.parse(localStorage.getItem("list")) || [];
  const [todos, setTodos] = useState(initialTodos);
  const [coret, setCoret] = useState(false);
  const [isi, setIsi] = useState();

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todos));
  }, [todos]);

  const handle = (event) => {
    event.preventDefault();
    const isi = event.target.elements.input.value;
    setTodos([...todos, { id: todos.length + 1, action: isi }]);
    event.target.reset();
  };

  const handleDel = (id) => {
    const storedlist = JSON.parse(localStorage.getItem("list") || []);
    const filtering = storedlist.filter((data) => data.id !== id);
    setTodos(filtering);
  };

  const hide = (data) => {
    setCoret(!coret);
    setIsi(data.id);
  };

  return (
    <div className="text-center">
      <h1>To Do List App</h1>
      <div>
        <form onSubmit={handle}>
          <label className="mr-2">Input</label>
          <input
            className=" mr-2 border-2 rounded-xl p-2"
            type="text"
            name="input"
          />
          <button className="p-2 bg-lime-300 rounded-xl">Tambah</button>
        </form>
      </div>
      <div className="flex justify-center m-5">
        <table class="border-collapse border border-slate-400">
          <thead>
            <tr>
              <th class="border border-slate-300 px-5 py-2">No.</th>
              <th class="border border-slate-300 px-5 py-2">To Do List</th>
              <th class="border border-slate-300 px-5 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((data, index) => (
              <tr key={index}>
                <td className="border border-slate-300 px-5 py-2">
                  {index + 1}
                </td>
                <td className="border border-slate-300 px-5 py-2">
                  <span
                    onClick={() => hide(data)}
                    className={data.id === isi && coret ? "line-through" : ""}
                  >
                    {data.action}
                  </span>
                </td>
                <td className="border border-slate-300 px-5 py-2">
                  <img
                    src="/delete.png"
                    alt="delete"
                    onClick={() => handleDel(data.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
