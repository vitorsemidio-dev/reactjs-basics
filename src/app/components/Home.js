import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Home extends Component {
    render() {
        const { name, age, user, children } = this.props;
        return (
            <div>
                <p>In a new Component</p>
                <p>Your name is {name}, your age is {age}</p>
                <p>User object => Name: {user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                    {children}
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired,
};