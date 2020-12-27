import React from 'react';
import checked from '../img/checked.svg'
import unCheck from '../img/uncheck.svg'
import deleteIcon from '../img/deleteIcon.svg'

class TodoItem extends React.Component {
    render() {
        const url = this.props.isComplete ? checked : unCheck
        const urlDeleteIcon = deleteIcon
        return(
            <div className= "todoItem__wrap">
                <img onClick={this.props.onClick} alt="check logo" className="todoItem__logo" src={url}/>
                <p>  {this.props.title} </p>
                <img src ={urlDeleteIcon} alt="delete logo" className="todoItem__delete" onClick={this.props.deleteItem} />
            </div>
            
        )
    }
}

export default TodoItem