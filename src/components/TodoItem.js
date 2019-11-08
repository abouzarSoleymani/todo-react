import React,{Component} from 'react';
import {observer} from 'mobx-react';
import todoStore from '../stores/TodoStore';

@observer
class TodoItem extends Component {
    onToggle = () => {
        this.props.todo.toggle()
    }
    remove = () =>{
        this.props.todo.remove();
        todoStore.getlengthActiveItem();
    }
    render(){
        const {todo} = this.props;
        return(
            <li className ={todo.completed? "completed": ''}>
            <div className = "view" >
                <input
                    type = "checkbox" onChange={this.onToggle} value = "on" className = "toggle" checked ={todo.completed} />
                <label>{todo.title}</label>
                <button
                onClick = {this.remove}
                    className = "destroy" />
            </div>
        </li>
        )
    }
}

export default TodoItem;