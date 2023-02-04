
import './App.css';
import { ToDo } from './ToDo';

function App() {
  return (
    <div className='container'>
      <div className='block'>
        <h1>To Do List</h1>
      </div>
      <div>
        <ToDo/>
      </div>
    </div>
  );
}

export default App;
