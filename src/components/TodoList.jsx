import React from 'react';

import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends React.Component {
    handleAddItem(name) {
        console.log("TodoList handleAddItem", name);
    }
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
                <TodoInput onAddItem={this.handleAddItem} />
            </div>
        );
    }
}

export default TodoList;