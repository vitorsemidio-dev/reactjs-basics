import React, { Component } from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import Home from './components/Home';

class App extends Component {
    constructor() {
        super();
        this.state = {
            homeLink: 'Home',
        }
    }
    onGreet(name) {
        console.log(`Hello, ${name}`)
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName,
        })
    }
    render() {
        const names = ['Armin', 'Eren', 'Mikasa']
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            names={names}
                            name={'Eren'}
                            age={20}
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                            initialLinkName={this.state.homeLink}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))