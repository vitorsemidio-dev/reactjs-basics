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
        const { age, name } = this.props;
        this.setState({ age, name })
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

    onChangeName(name) {
        this.setState({name})
    }
    render() {
        const { name, age } = this.state;
        const { names } = this.props;
        return (
            <div>
                <p>In a new Component</p>
                <p>Your name is {name}</p>
                <p>your age is {age} </p>
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
                <div className="buttons">
                    {names.map((name, i) => (
                        <button 
                            key={i}
                            className="btn btn-outline-primary"
                            onClick={() => this.onChangeName(name)}>
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};