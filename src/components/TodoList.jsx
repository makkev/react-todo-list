import React from 'react';

import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        const items = ['First item', 'Second item', 'Third item'];

        return (
            <ul>
                { items.map(function(item) { return <TodoItem name={item}/>})}
            </ul>
        );
    }
}

export default TodoList;