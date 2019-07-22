import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends Component {
    render() {
        let user = {
            name: 'Emidio',
            hobbies: ['Sports', 'Games', 'Study']
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={'Eren'} age={20} user={user}>
                            <p>Filho no corpo da tag Home</p>
                        </Home>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))