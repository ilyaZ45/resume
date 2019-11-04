const HelloComponent = React.createClass({
    getInitialState(){
        return{
            name: 'Noname'
        };
    },

    handleChange(e){   // 1-обрабатывает события
        console.log(e.target.value);  // эта строка для проверки её убрать

        this.setState({       // 3-набор State
            name: e.target.value
        });
    },

    render (){
        return (
            <div>
                <input
                    placeholder="Enter your name"
                    // value={this.state.name}   // одно и тоже состояние и значение
                    // defaultValue=''    // значение по умолчанию
                    onChange={this.handleChange}   // 2-передаёт ссылку на обработчик
                />
                <h1>Hello {this.state.name }! </h1>
            </div>
        );
    }
});
ReactDOM.render(
    <HelloComponent  />,
    document.getElementById('root')
);
