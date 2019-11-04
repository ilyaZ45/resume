const Timer = React.createClass({
    getInitialState() {
        return {
            secondsElapsed: 0  // кол-во прошедших секунд
        };
    },

    componentDidMount() {  // запускаем таймер
        this.timer = setInterval(this.tick, 1000);
    },

    tick() {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    },

    componentWillUnmount() {
        clearInterval(this.timer);
    },

    render() {
        return (
            <div> Уже прошло {this.state.secondsElapsed} секунд </div>
        );
    }
});

ReactDOM.render(
    <Timer />,
    document.getElementById('root')
);
