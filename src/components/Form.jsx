import React from 'react';


class Form extends React.Component {
    state = { userName: '' };
    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://api.github.com/users/${this.state.userName}`);
        const data = await response.json();
        this.props.onSubmit(data);
    };
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="GitHub user"
            onChange={e => this.setState({userName: e.target.value})}
            />
            <button>Add Card</button>
        </form>
    );
    }
}

export default Form;