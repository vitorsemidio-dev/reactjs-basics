import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Home extends Component {
    constructor(props) {
        super();
        this.state = {
            age: 0,
            name: '',
            homeLink: props.initialLinkName
        }
    };

    componentWillMount() {
        const { age, name, } = this.props;
        this.setState({ age, name, })
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

    onChangelink() {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        })
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
                        className="btn btn-primary"
                        onClick={() => this.onMakeNewer()}>
                        Make me newer
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={this.onMakeOlder.bind(this)}>
                        Make me older
                    </button>
                </div>
                <div className="buttons">
                    {names.map((name, i) => (
                        <button 
                            key={i}
                            className="btn btn-warning"
                            onClick={() => this.onChangeName(name)}>
                            {name}
                        </button>
                    ))}
                </div>
                <hr/>
                <button onClick={() => this.props.greet(name)} className="btn btn-default">Greet</button>
                <div>
                    <input
                        type="input/text"
                        onChange={(event) => this.onHandleChange(event)}
                        defaultValue={this.state.homeLink}/>
                    <button
                        onClick={this.onChangelink.bind(this)}
                        className="btn btn-default"
                        >
                        Change Header Link Name
                    </button>
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    greet: PropTypes.func,
    names: PropTypes.array,
    initialLinkName: PropTypes.string,
};