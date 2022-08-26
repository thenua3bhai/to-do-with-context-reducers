import { ToDoProvider } from "./context/todoContext";
import ToDoApp from "./ToDoApp";

function App() {
  return (
    <ToDoProvider>
      <ToDoApp />
    </ToDoProvider>
  );
}

export default App;
