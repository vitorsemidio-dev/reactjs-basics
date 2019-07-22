import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import Home from './components/Home';

class App extends Component {
    render() {
        const names = ['Armin', 'Eren', 'Mikasa']
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home names={names} teste={'teste'} name={'Eren'} age={20}/>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))