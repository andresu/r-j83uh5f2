import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        };
        this.handleCount = this.handleCount.bind(this); 
    }
    getInitialState(){
        return{
            text: this.props.text,
        }
    }

    handleCount(ev){
        this.setState({
           text:ev.target.value
        });
        
    }

    render() {
        return (
            <div className="container">
                <textarea rows="3" onChange={this.handleCount} value={this.state.text}></textarea>
                <div className="counter">{this.state.text.length}</div>
            </div>
            );
    }
}

export default App;
