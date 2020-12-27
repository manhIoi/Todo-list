import './App.css';
import TodoList from './components/TodoList';
function App() {
  const TODOLISt =[
    {title: 'Đi chơi', isComplete: true},
    {title: 'Đi chợ', isComplete: true},
    {title: 'Đi học', isComplete: false},
]

  const onFilterAll=()=>{
  }


  return (
    <div className="App">
      <TodoList todoList= {TODOLISt}/>
    </div>
  );
}

export default App;
// data đây okk ... 
// hình như ghi lộn file
// file cha có state bên file todolist á
// hôm bữa đặt tên lộn quên sửa :))