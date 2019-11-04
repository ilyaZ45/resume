import React, { Component, PropTypes } from 'react';

import passProps from '../hoc/passProps.jsx';  //////+

import './Note.css';


// decorate(options, options2)(MyClass) => EnhancedClass

// @decorate1
// @decorate2
@passProps({ title: 'HOCs are COOL' }, Note)  // ++ это мы используем декоратор

export default class Note extends Component {
    static propTypes = {        ///////// props
        title: PropTypes.node,   ////+
        id: PropTypes.number.isRequired,  // isRequired  -- компон.явл обязательным
        color: PropTypes.string.isRequired,
        // children: PropTypes.string,
        children: PropTypes.node, // если передаём текст
        onDelete: PropTypes.func.isRequired
    }

    static defaultProps = {  // если не пердаём цвет
        color: 'lightgreen'
    }


    constructor() { // props добавляем если компонент дальше используется
        super();

        // this.state = {    // если мы описываем начальное состояние в super надо props
        //     foo: this.props.foo
        // }

        this.handleDelete = this.handleDelete.bind(this)
    }


    handleDelete() {
        this.props.onDelete(this.props.id);
    }

    render() {
        const {
            title,
            color,
            children,
            onDelete
        } = this.props;

        return (
            <div className="note" style={{ backgroundColor: color }}>
                <span className="note__delete-icon" onClick={this.handleDelete}> × </span>
                <h3>{title}</h3>
                {children}
            </div>
        );
    }
}

// export default passProps({ title: 'Hello' }, Note);  /////+
