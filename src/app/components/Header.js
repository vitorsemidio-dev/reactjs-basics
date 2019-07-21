import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li className="container">
                            <a href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}