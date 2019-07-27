import React, { Component } from 'react';
import { RANDOM_USER_API } from "./Constants";

export default class Lifecycle extends Component {
    constructor() {
        super();
        console.log('Constructor');
        this.state = {
            valor: 'Hello Lifecycle',
            name: null,
            letUpdate: true, // se false, o component não poderá ser atualizado
            abortController: new AbortController(),
        }
        
    }
    componentDidMount() {
        console.log('componentDidMount')
        const signal = this.state.abortController.signal;
        fetch(RANDOM_USER_API, { signal })
            .then(results => results.json())
            .then(data => {
                const {first: name} = data.results[0].name
                this.setState({
                    name
                })
            })
            .catch(err => {
                console.log('err catch', err.name)
                return;
            })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState)
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
        this.state.abortController.abort();
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextProps, nextState)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        if (nextState.letUpdate === false) {
            return false;
        }
        return true;
    }

    render() {
        const { valor, name } = this.state;
        return(
            <div>
                <h3>{valor} {name ? name : 'sem nome' }</h3>
                <div>
                    <button className="btn btn-primary" onClick={this.componentDidMount.bind(this)}>New Request</button>
                </div>
            </div>
        )
    }
}
