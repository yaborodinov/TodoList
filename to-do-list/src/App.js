import './App.css';
import AddTodo from "./components/AddTodo";
import ToDoList from "./components/ToDoList";
import VisibilityFilters from "./components/VisibilityFilters";

function App() {
  return (
    <>
      <div>
        <h1>Todo - list</h1>
        <AddTodo />
        <ToDoList />
        <VisibilityFilters/>
      </div>
    </>
  );
}

export default App;
