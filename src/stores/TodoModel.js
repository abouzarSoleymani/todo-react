import {observable, action, remove} from 'mobx'

export default class TodoModel{
    store
    id
    @observable title
    @observable completed

    constructor(store, id, title, completed){
         this.store = store;
         this.id = id;
         this.title= title;
         this.completed = completed;
     }

    @action
    toggle(){
        this.completed = !this.completed;
    }

    @action
    remove(){
       this.store.todos.remove(this)
    }
}