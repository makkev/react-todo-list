import React from 'react';

class TodoInput extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit');
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoInput;