const Counter = React.createClass({
    getInitialState(){     //начальное состояние в компоненте
        return{
            value: 0

        };
    },
handleDecrement(){
    this.setState({value: this.state.value - 1})
},	

// тут просто смотрим как работает ,вверху боевой
handleDecrement(){
	console.log('before', this.state.value);
    this.setState({value: this.state.value - 1}, () => {
	console.log('after2', this.state.value);
})
	console.log('after', this.state.value);
},	

handleIncrement(){
    this.setState({value: this.state.value + 1})
},


    render(){
        return (
            <div>
                <button onClick={this.handleDecrement}>-</button>
                <h1>{this.state.value}</h1>
                <button onClick={this.handleIncrement} >+</button>
            </div>

        );
    }
});



ReactDOM.render(
    // React.createElement(HelloComponent, { name:

    <Counter />,

    document.getElementById('root')
);
