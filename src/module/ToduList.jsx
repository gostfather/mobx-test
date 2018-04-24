import {observable, computed} from 'mobx';

class Todo {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}

export default class TodoList {
    @observable todos = [new Todo(1)];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}