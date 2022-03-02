import logo from './logo.svg';
import './App.css';
import Formulario from './components/formulario';
import Todolist from './components/todoList';
import DoneList from './components/doneList';

function App() {
  return (
    <div className="App">
      <div className="titleApp">Cop-out</div>
      <Formulario />
      <Todolist />
      <DoneList />
    </div>
  );
}

export default App;
