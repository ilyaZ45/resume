import React, { Component } from 'react';

import './Note.css';

export default class Note extends Component {
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
