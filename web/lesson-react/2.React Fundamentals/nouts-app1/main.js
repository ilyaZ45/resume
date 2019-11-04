const DEFAULT_COLOR ='yellow';

const Note = React.createClass({
    render(){
        const {
            children,
            color,
        } = this.props;

        // console.log(this.props);  // проверка
        return (
            <div className='note' style={{backgroundColor: color}}>
                {children}
            </div>
        );
    }
});

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            text:''
        };
    },

    handleTextChange(event) {  // обработчик событий для смены состояний
        this.setState({
            text: event.target.value
        });
    },

    handleNoteAdd() {
        // console.log('ADD')  // проверка
    },

    render(){
        return (
            <div className='editor'>
                <textarea
                    rows={5}
                    placeholder='Enter your note here..'
                    className='editor__textarea'
                    value={this.state.text}
                    onChange={this.HandleTextChange}
                />

                <button className='editor__button' onClick={this.handleNoteAdd}>Add</button>

            </div>
        );
    }
});

const NotesGrid = React.createClass({
    render(){
        // console.log(this.props);  // проверка
        const { notes} = this.props;

        return (
            <div>
                {
                    notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            text={note.text}
                            color={note.color}
                        >
                            {note.text}
                        </Note>
                    )
                }

            </div>
        );
    }
});


const NotesApp = React.createClass({
    getInitialState() {
        return{
            notes: [{ id : 1, color: 'yellow', text: 'Hey, I am first note here!'}]
        };
    },
    render(){
        return (
            <div className='app'>
                <h2 className='app_header'>NotesApp</h2>

                <NoteEditor />
                <NotesGrid notes={this.state.notes}/>

            </div>
        );
    }
});


ReactDOM.render(
    // React.createElement(HelloComponent, { name:

    <NotesApp />,

    document.getElementById('root')
);