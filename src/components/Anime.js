import React, { Component } from 'react';

export default class Anime extends Component {
    render() {
        return (
            <img className="img-fluid anime" 
            src={this.props.src} 
            alt={this.props.alt}
            onClick={() => {this.props.handleClick(this.props.id)} }
            />
        )
    }
}