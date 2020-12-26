import React from 'react'
import TodoItem from './TodoItem';
import './TodoItem.css'
import HeaderSearch from './HeaderSearch'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state= {todoList: this.props.todoList}
        this.onItemClicked = this.onItemClicked.bind(this)
        console.log(this.state.todoList);
        this.onKeyUp = this.onKeyUp.bind(this)
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
                    ...todoList.slice(index+1)
                ]
            })
            console.log(this.state.todoList);
        }
    }
    onKeyUp(e) {
        let text = e.target.value
        if (e.keyCode===13) {
            text= text.trim()
            if (text!='') {
                this.setState({
                    todoList: [
                        {title: text, isComplete: false},
                        ...this.state.todoList
                    ]
                })
            }
            e.target.value=''
        }
    }
    render() {
        const todoList = this.state.todoList.map((item,index) => {
            const isComplete = item.isComplete
            const className = isComplete ? `todoItem active` : `todoItem`
            return (
                <div className={className}>
                    <TodoItem 
                        key ={index}
                        title={item.title} 
                        isComplete={item.isComplete}
                        onClick={this.onItemClicked(item)}
                    />
                </div>
            )
        }
        )
        return(
            <div className= "Container">
                <HeaderSearch onKeyUp= {this.onKeyUp}/>
                <div className={'todoList'}>
                    {todoList}
                </div>
            </div>
        )
    }
}

export default TodoList