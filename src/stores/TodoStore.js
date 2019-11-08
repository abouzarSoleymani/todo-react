import {action, observable, toJS } from "mobx";
import TodoModel  from './TodoModel';

class TodoStore {
    @observable todos = [];
    lastId = 0;
    savedTodos = [];
    @observable lengthActive = 0;

    @action
    addTodo(title){
        this.todos.push(new TodoModel(this, this.lastId++ , title, false));
        this.savedTodos = this.todos;
        this.getlengthActiveItem()
    }

    @action
    getCompleted(){
        this.todos = this.savedTodos.filter((item)=> item.completed == true )
    }

    @action
    getActive(){
        this.todos = this.savedTodos.filter((item)=> item.completed != true )
    }

    @action
    clearCompleted(){
        this.todos = this.savedTodos.filter((item) => item.completed != true)
        this.savedTodos = this.todos;
        this.getlengthActiveItem();
    }
    @action
    getAll(){
        this.todos = this.savedTodos;
    }
    @action
    getlengthActiveItem(){
        console.log(this.savedTodos.length)
        this.lengthActive =  this.todos.length;
    }

}


const store =  new TodoStore

export default store