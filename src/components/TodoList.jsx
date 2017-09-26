import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        const items = [
            { name: "First item", done: false},
            { name: "Second item", done: true},
            { name: "Third item", done: false}
        ];

        return (
            <ul>
                { items.map(item => <TodoItem name={item.name} done={item.done} />) }
            </ul>
        );
    }
}

export default TodoList;