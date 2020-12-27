import React from 'react'
import TodoItem from './TodoItem';
import './TodoItem.css'
import HeaderSearch from './HeaderSearch'
import ButtonsShow from './ButtonsShow'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            todoList: this.props.todoList ,
            // cloneTodoList:[]
        }
        this.onItemClicked = this.onItemClicked.bind(this)
        this.onItemDelete = this.onItemDelete.bind(this)
        this.onShow = this.onShow.bind(this)
        this.onFilterCompleted = this.onFilterCompleted.bind(this)
        this.onKeyUp = this.onKeyUp.bind(this)
    }
    onShow(data) {
        return (e) => {
            const todoList = this.state.todoList
            // this.setState({cloneTodoList: this.state.todoList})
            const cloneData = data === 'All' ? this.props.todoList
                : (data === "Incomplete" ?
                    todoList.filter(item => {
                        return item.isComplete == false;
                    })
                    : todoList.filter(item => {
                        return item.isComplete;
                    })
                )
            this.setState({
                todoList: cloneData
            })
            // console.log(this.state.cloneTodoList);
        }

    }
    onItemDelete(item) {
        return (e) => {
            const todoList = this.state.todoList
            const index = todoList.indexOf(item);
            console.log(index);
            this.setState({
                todoList: [
                    ...todoList.slice(0, index),
                    ...todoList.slice(index + 1),
                ]
            })
            console.log(this.state.todoList);
        }
    }
    onItemClicked(item) {
        return (e) => {
            const todoList = this.state.todoList
            const index = todoList.indexOf(item);
            this.setState({
                todoList: [
                    ...todoList.slice(0, index),
                    {
                        ...item,
                        isComplete: !item.isComplete
                    },
                    ...todoList.slice(index + 1)
                ]
            })
        }
    }
    onKeyUp(e) {
        let text = e.target.value
        if (e.keyCode === 13) {
            text = text.trim()
            if (text != '') {
                this.setState({
                    todoList: [
                        { title: text, isComplete: false },
                        ...this.state.todoList
                    ]
                })
            }
            e.target.value = ''
        }
    }

    onFilterCompleted = () => {
        const clonedata = this.state.todoList.filter(item => {
            return item.isComplete;
        });
        console.log(clonedata, "clonedata");
        this.setState({
            todoList: clonedata
        })
    }
    render() {
        const todoList = this.state.todoList.map((item, index) => {
            const isComplete = item.isComplete
            const className = isComplete ? `todoItem active` : `todoItem`
            return (
                <div className={className}>
                    <TodoItem
                        key={index}
                        title={item.title}
                        isComplete={item.isComplete}
                        onClick={this.onItemClicked(item)}
                        deleteItem={this.onItemDelete(item)}
                    />
                </div>
            )
        }
        )
        return (
            <div className="Container">
                <HeaderSearch onKeyUp={this.onKeyUp} />
                <div className={'todoList'}>
                    {todoList}
                </div>
                <ButtonsShow
                    onFilterCompleted={this.onFilterCompleted}
                    onShow={this.onShow}
                />
            </div>
        )
    }
}

export default TodoList
// đây là component cha
// lợi viết 1 cái func setstate ở đây r truyền qua thằng con thôi
// rồi có cách nào biết là ở button con là cái all, hay là cái complete k
// chạy xem thử ... chạy demoxem thu
// chạy sao, chưa code gì mà
//  kisck zô cái all là nó xuất hiện all, complete là hiện complete
// đâu
// chưa lưu dữ liệu, đợi làm xong rồi lưu bên firebase
//à ok 