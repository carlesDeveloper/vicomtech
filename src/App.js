import logo from './logo.svg';
import './App.css';
import Formulario from './components/formulario';
import Todolist from './components/todoList';
import DoneList from './components/doneList';
import TareasProvider from './context/listContext';

function App() {
  return (
    <TareasProvider>
      <div className="App">
        <div className="titleApp">Cop-out</div>
        <Formulario />
        <Todolist />
        <DoneList />
      </div>
    </TareasProvider>
  );
}

export default App;
