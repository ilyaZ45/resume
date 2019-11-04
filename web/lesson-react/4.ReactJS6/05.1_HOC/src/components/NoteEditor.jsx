import React, { Component } from 'react';  /////////

import './NoteEditor.css';

const DEFAULT_COLOR = 'yellow';

export default class NoteEditor extends Component{
    // constructor(){   //
    //     super();    // конструктор базового класса
    //     this.state = {
    //         text:''
    //     };
    // }

    // constructor() { // этот метод если не ставить стрелочки
    //     super();
    //     this.handleTextChange = this.handleTextChange.bind(this);
           // this.handleTextChange = ::this.handleTextChange; // ещё так можно записать вместо bind
    //     this.handleNoteAdd = this.handleNoteAdd.bind(this);
    // }

    state = {  // добавили stage-0
        text:''
    }

    handleTextChange = (event) => {   /////////////
        this.setState({
            text: event.target.value
        });
    }

    handleNoteAdd = () => {
        const newNote = {
            text: this.state.text,
            color: DEFAULT_COLOR,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);

        this.resetState();
    }
    resetState() {
        this.setState({
            text:''
        })
    }
    render() {
        console.log(this.state);   // проверка

        return (
            <div className="editor">
                <textarea
                    rows={5}
                    placeholder="Enter your note here..."
                    className="editor__textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                    // onChange={this.handleTextChange.bind(this)}  //недостаток-созд.новая ссылка
                />

            <button
                className="editor__button"
                onClick={this.handleNoteAdd}
                // onClick={this.handleNoteAdd.bind(this)}

                >
                    Add
            </button>
            </div>
        );
    }
}

// const NoteEditor = React.createClass({
//     getInitialState() {
//         return {
//             text: ''
//         };
//     },

    // handleTextChange(event) {
    //     this.setState({
    //         text: event.target.value
    //     });
    // },
    //
    // handleNoteAdd() {
    //     const newNote = {
    //         text: this.state.text,
    //         color: DEFAULT_COLOR,
    //         id: Date.now()
    //     };
    //
    //     this.props.onNoteAdd(newNote);
    //
    //     this.resetState();
    // },
    //
    // resetState() {
    //     this.setState({
    //         text: ''
    //     });
    // },

    // render() {
    //     return (
    //         <div className="editor">
    //             <textarea
    //                 rows={5}
    //                 placeholder="Enter your note here..."
    //                 className="editor__textarea"
    //                 value={this.state.text}
    //                 onChange={this.handleTextChange}
    //             />
    //
    //         <button className="editor__button" onClick={this.handleNoteAdd}>Add</button>
    //         </div>
    //     );
    // }
