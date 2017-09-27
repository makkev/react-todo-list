import React from 'react';

import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            items: []
        };
    }
    handleAddItem(name) {
        console.log("TodoList handleAddItem", name);
        const newItems = this.state.items.concat({ name: name, done: false });
        this.setState({ items: newItems });
    }
    render() {
        return (
            <div>
                <ul>
                    { this.state.items.map(item => <TodoItem name={item.name} done={item.done} />) }
                </ul>
                <TodoInput onAddItem={this.handleAddItem.bind(this)} />
            </div>
        );
    }
}

export default TodoList;