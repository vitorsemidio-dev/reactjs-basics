import React, { Component } from 'react';
import { render } from 'react-dom';

import Lifecycle from './components/Lifecycle';

class App extends Component {
    constructor() {
        super();
        this.state = {
            homeMounted: true,
        }
    }

    onChangeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }
    render() {
        let lifecycleCmp = "Sem Componente Lifecycle";
        if (this.state.homeMounted) {
            lifecycleCmp = <Lifecycle/>
        }
        
        return (
            <div className="container">
                <div className="row">
                    <button
                        onClick={this.onChangeMounted.bind(this)}
                        className="btn btn-primary">
                        (Un)Mont Lifecycle Component
                    </button>
                </div>
                <div className="row">
                    <h1>Index</h1>
                    {lifecycleCmp}
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'))