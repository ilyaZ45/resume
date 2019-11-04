import React, { Component, PropTypes } from 'react';

import './Note.css';

export default class Note extends Component {
    static propTypes = {        ///////// props
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
            color,
            children,
            onDelete
        } = this.props;

        return (
            <div className="note" style={{ backgroundColor: color }}>
                <span className="note__delete-icon" onClick={this.handleDelete}> × </span>
                {children}
            </div>
        );
    }
}
