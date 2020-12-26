import React from 'react';
import checked from '../img/checked.svg'
import unCheck from '../img/uncheck.svg'
class TodoItem extends React.Component {
    render() {
        const url = this.props.isComplete ? checked : unCheck
        return(
            <div className= "todoItem__wrap">
                <img onClick={this.props.onClick} alt="check logo" className="todoItem__logo" src={url}/>
                <p>  {this.props.title} </p>
            </div>
            
        )
    }
}

export default TodoItem