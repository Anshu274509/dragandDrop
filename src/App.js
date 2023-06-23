import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {/* <DragDrop />
         */}
         <Todo title="Brainstorming" 
         detail="Brainstorming brings team members' diverse experience into play. "
         status="Low"
         />
      </div>
    </DndProvider>
  );
}

export default App;
