import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            age: 0,
            name: '',
        }
    };

    componentWillMount() {
        const { age } = this.props;
        this.setState({ age })
    }

    onMakeOlder() {
        let { age } = this.state;
        age++;
        this.setState({ age });
    }

    onMakeNewer() {
        let { age } = this.state;
        age--;
        this.setState({ age });
    }
    render() {
        const { name } = this.props;
        return (
            <div>
                <p>In a new Component</p>
                <p>Your name is {name}, your age is {this.state.age} </p>
                <hr/>
                <div className="buttons">
                    <button 
                        className="btn btn-outline-primary"
                        onClick={() => this.onMakeNewer()}>
                        Make me newer
                    </button>
                    <button
                        className="btn btn-outline-primary"
                        onClick={this.onMakeOlder.bind(this)}>
                        Make me older
                    </button>                    
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};