import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello Academind</h1>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))