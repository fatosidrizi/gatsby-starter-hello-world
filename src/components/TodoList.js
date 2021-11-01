import React from 'react'

const TodoList = (props) => {
    console.log(props);
    return (
        <table>
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>Text</td>
                    <td>Done</td>
                </tr>
                {
                    props.list.map(item => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.text}</td>
                            <td>{item.done ? "Yes" : "No"}</td>
                            <td>
                                <button onClick={() => props.deleteTodo(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default TodoList
