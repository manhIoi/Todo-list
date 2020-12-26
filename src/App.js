import './App.css';
import TodoList from './components/TodoList';
import HeaderSearch from './components/HeaderSearch'
function App() {
  const TODOLISt =[
    {title: 'Đi chơi', isComplete: true},
    {title: 'Đi chợ', isComplete: true},
    {title: 'Đi học', isComplete: false},
    {title: 'Đi học 1', isComplete: false},

]
  return (
    <div className="App">
      <TodoList todoList= {TODOLISt}/>
    </div>
  );
}

export default App;
