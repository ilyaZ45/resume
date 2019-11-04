const HelloComponent = React.createClass({

    render (){
        console.log(<h1>Hello,my whity</h1>);

        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <img src={this.props.avatar} alt={this.props.name}  width={200} height={200} />
            </div>
        );
        // return React.createElement('div', {},
            // React.createElement('h1', {}, `Hello,  ${this.props.name}!!`),
            // React.createElement('img', {src: this.props.avatar, alt:this.props.name})

        // );
    }
});
ReactDOM.render(
    // React.createElement(HelloComponent, { name: 'Ilya', avatar:'C:/Users/ilyuha/Desktop/Screenshot_5.jpg' }),
    <div>

    <HelloComponent  name= "Ilya" avatar="http://1avatara.ru/img/catalog_logo/pic27.gif" />
    <HelloComponent  name= "Ilya" avatar="http://1avatara.ru/img/catalog_logo/pic27.gif" />
    <HelloComponent  name= "Ilya" avatar="http://1avatara.ru/img/catalog_logo/pic27.gif" />
    <HelloComponent  name= "Ilya" avatar="http://1avatara.ru/img/catalog_logo/pic27.gif" />

    </div>,

    document.getElementById('root')
)
