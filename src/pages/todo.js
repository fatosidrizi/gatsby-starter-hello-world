import React from 'react'
import TodoList from '../components/TodoList'

const Todo = () => {

    const [todos, setTodos] = React.useState([
        {
            id: '1',
            text: 'Buy something...',
            done: false
        },
        {
            id: '2',
            text: 'Service',
            done: false
        },
    ]);

    const deleteTodo = (id) => {
        console.log('Deleting item with id ' + id);
        const changedList = todos.filter(item => item.id != id);
        console.log("Changed list ", changedList)
        setTodos(changedList)
    }

    return (
        <div>
            <TodoList list={todos} deleteTodo={deleteTodo} />
        </div>
    )
}

export default Todo
