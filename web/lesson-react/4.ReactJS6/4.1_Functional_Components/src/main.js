import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class Button extends Component {
// 	static contextTypes = {
// 		color: React.PropTypes.string,
// 		text: React.PropTypes.string
//
// 	}
//
// 	render() {
// 		console.log(this.context);  //// проверка
// 		return (
// 			<button style={{ backgroundColor: this.context.color }}>
// 				{this.props.children}
// 			</button>
// 		);
// 	}
// }

const Button = (props, context) => (
	<button style={{ backgroundColor: context.color }}>
		{props.children}
	</button>
);

Button.contextTypes = {  ///
	color: React.PropTypes.string,
	text: React.PropTypes.string
};

Button.propTypes = {  ////
	children: React.PropTypes.node.isRequired,
};



// class Message extends Component {
const Message = props => (  // тоже пример  функцион.компонента
	// render() {
	// 	return (
			<div style={{ border: '1px solid grey', margin: 10, padding: 10 }}>
				<p>{props.text}</p>
				<Button>Delete</Button>
			</div>
		);
// 	}
// )

const MessageList = props => (  /// пример функционального компонента
	<div>
		{
			props.messages.map(message =>
				<Message key={message} text={message} />
			)
		}
	</div>
);

// class MessageList extends Component {
// 	render() {
// 		return (
//             <div>
//                 {
//                     this.props.messages.map(message =>
//         			    <Message key={message} text={message} />
//         		    )
//                 }
//             </div>
//         );
// 	}
// }

class App extends Component {
    static childContextTypes = {
        color: React.PropTypes.string,
		text: React.PropTypes.string
    }

    getChildContext() { // наш контекст
        return {
            color: 'red',
			text: 'I am God'
        };
    }

	render() {
		return <MessageList messages={this.props.messages} />;
	}
}

const MESSAGES = [
    'Fusce ac felis sit amet',
    'Vivamus aliquet elit ac nisl',
    'In hac habitasse platea dictumst',
    'Vestibulum ante ipsum primis in',
    'Sed cursus turpis vitae tortor',
    'Aenean commodo ligula eget dolor'
];

ReactDOM.render(
    <App messages={MESSAGES} />,
    document.getElementById('root')
);
