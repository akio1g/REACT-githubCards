import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="CardDiv">
                <img src={this.props.image}/>
                <div>
                    <h2>{this.props.name}</h2>
                    <h3>Number of Repositories: {this.props.repo}</h3>
                </div>
            </div>
        );
    }
}

export default Card;