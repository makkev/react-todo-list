import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </ul>
        );
    }
}

export default TodoList;