import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                <TodoItem name="Item 1"/>
                <TodoItem name="Item 2"/>
                <TodoItem name="Item 3"/>
            </ul>
        );
    }
}

export default TodoList;