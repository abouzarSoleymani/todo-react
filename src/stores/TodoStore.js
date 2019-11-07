import { action, observable } from "mobx";
import TodoModel  from './TodoModel';

class TodoStore {
    @observable todos = []
    lastId = 0;

    @action
    addTodo(title){
        this.todos.push(new TodoModel(this, this.lastId++ , title, false))
    }
}
const store = new TodoStore()
export default store;