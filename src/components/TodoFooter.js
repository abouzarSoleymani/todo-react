import React,{Component} from 'react';

class TodoFooter extends Component{
    render(){
        return(
            <footer className="footer">
            <div className="todo-count">
                item left
            </div>
            <ul className="filters">
                <li><button
                   >All</button></li>
                <li><button
                    >Active</button></li>
                <li><button
                   >Completed</button></li>
            </ul>
            <button className="clear-completed">
                Clear completed
            </button>
        </footer>

        )
    }
}
export default TodoFooter;