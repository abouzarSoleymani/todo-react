import React,{Component} from 'react';
import todoStore from '../stores/TodoStore';
import {observer} from 'mobx-react';

@observer
class TodoFooter extends Component{
    getCompleted = () => {
        todoStore.getCompleted();
    }
    getAll = ()=> {
        todoStore.getAll();
    }
    getActive = () => {
        todoStore.getActive();
    }
    clearCompleted = () => {
        todoStore.clearCompleted();
    }
    render(){
        return(
            <footer className="footer">
            <div className="todo-count">
                {todoStore.lengthActive}  item left
            </div>
            <ul className="filters">
                <li><button onClick = {this.getAll}
                   >All</button></li>
                <li><button  onClick = {this.getActive}
                    >Active</button></li>
                <li><button onClick = {this.getCompleted}
                   >Completed</button></li>
            </ul>
            <button onClick = {this.clearCompleted}
            className="clear-completed">
                Clear completed
            </button>
        </footer>

        )
    }
}
export default TodoFooter;