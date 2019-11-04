import React from 'react';

const DEFAULT_COLOR = 'yellow';

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            text: ''
        };
    },

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        });
    },

    handleNoteAdd() {
        const newNote = {
            text: this.state.text,
            color: DEFAULT_COLOR,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);

        this.resetState();
    },

    resetState() {
        this.setState({
            text: ''
        });
    },

    render() {
        return (
            <div className="editor">
                <textarea
                    rows={5}
                    placeholder="Enter your note here..."
                    className="editor__textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />

                <button className="editor__button" onClick={this.handleNoteAdd}>Add</button>
            </div>
        );
    }
});

export default NoteEditor;
