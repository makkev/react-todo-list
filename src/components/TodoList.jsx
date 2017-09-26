import React from 'react';

import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends React.Component {
    render() {
        const items = [
            { name: "First item", done: false},
            { name: "Second item", done: true},
            { name: "Third item", done: false}
        ];

        return (
            <div>
                <ul>
                    { items.map(item => <TodoItem name={item.name} done={item.done} />) }
                </ul>
                <TodoInput />
            </div>
        );
    }
}

export default TodoList;