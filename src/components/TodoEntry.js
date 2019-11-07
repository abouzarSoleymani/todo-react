import React, {Component} from 'react'
import todoStore from '../stores/TodoStore';

class TodoEntry extends Component{
    state = {
        value: ''
    }
    handleKeyDown = event => {
        if(event.keyCode !== 13 || this.state.value == '')
            return;
         event.preventDefault()
         todoStore.addTodo(this.state.value)   
         this.setState({
             value: ''
         })
    }
    render(){
        return(
            <header className = "header" >
            <h1>
                todo
            </h1>
            <input
                value = {this.state.value}
                onChange = {event => this.setState({value: event.target.value})}
                onKeyDown = {event => this.handleKeyDown(event)}
                className = "new-todo"
                type = "text"
                placeholder = "what needs to be done?"
            />
        </header>
        )
    }
}
export default TodoEntry;