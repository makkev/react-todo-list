import React from 'react';

import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends React.Component {
    constructor() {
        super();

        this.items = [];
    }
    handleAddItem(name) {
        console.log("TodoList handleAddItem", name);
        this.items.push({name: name, done: false});
    }
    render() {
        return (
            <div>
                <ul>
                    { this.items.map(item => <TodoItem name={item.name} done={item.done} />) }
                </ul>
                <TodoInput onAddItem={this.handleAddItem.bind(this)} />
            </div>
        );
    }
}

export default TodoList;