import React from 'react';

class TodoInput extends React.Component {
    render() {
        return (
            <form>
                <input type="text" />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoInput;