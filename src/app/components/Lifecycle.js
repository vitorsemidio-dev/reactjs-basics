import React, { Component } from 'react';

export default class Lifecycle extends Component {
    constructor() {
        super();
        console.log('Constructor');
        this.state = {
            valor: 'Hello Lifecycle',
            letUpdate: true, // se false, o component nao poderah ser atualizado
        }
        this.updateValor();
    }
    // componentDidCatch() {
    //     console.log('componentDidCatch')
    // }
    componentDidMount() {
        console.log('componentDidMount')
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
    updateValor() {
        setTimeout(() => {
            let valor = 'NOVO TITULO'
            this.setState({valor});
        }, 2000);
    }
    render() {
        return(
            <div>
                <h3>{this.state.valor}</h3>
            </div>
        )
    }
}