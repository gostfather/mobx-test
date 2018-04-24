import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './App.scss';
import DevTools from 'mobx-react-devtools';
import TodoList from "./module/ToduList";
const store = new TodoList();

@observer
class TodoListView extends Component {
    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}

const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoListView todoList={store}  />
        <DevTools />
      </div>
    );
  }
}

export default App;
