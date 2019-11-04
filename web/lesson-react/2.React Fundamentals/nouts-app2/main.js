const DEFAULT_COLOR ='yellow';

const Note = React.createClass({
    render(){
        const {
            children,
            color,
            onDelete
        } = this.props;

        // console.log(this.props);  // проверка
        return (
            <div className='note' style={{backgroundColor: color}}>
                <span className="note__delete-icon" onClick={onDelete}> × </span>
                {children}
            </div>
        );
    }
});

// const NoteEditor = React.createClass({
//     getInitialState() {
//         return {
//             text:''
//         };
//     },
//
//     handleTextChange(e) {  // обработчик событий для смены состояний
//         this.setState({
//             text: e.target.value
//         });
//     },
//
//     handleNoteAdd() {
//         console.log('ADD')  // проверка
//     },
//
//     render(){
//         return (
//             <div className='editor'>
//                 <textarea
//                     rows={5}
//                     placeholder='Enter your note here..'
//                     className='editor__textarea'
//                     value={this.state.text}
//                     onChange={this.HandleTextChange}
//                 />
//
//                 <button className='editor__button' onClick={this.handleNoteAdd}>Add</button>
//
//             </div>
//         );
//     }
// });

/////  Моё
class NoteEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.resetState = this.resetState.bind(this);

    }

    handleTextChange(event) {  // обработчик событий для смены состояний
        this.setState({
            text: event.target.value
        });
    }

    handleNoteAdd(event) {
        console.log('ADD')  // проверка
        alert('Отправленное имя: ' + this.state.text)
        event.preventDefault()

        const newNote = {
            text: this.state.text,
            id: Date.now(),
            color: DEFAULT_COLOR

        };


    this.props.onNoteAdd(newNote);

    this.resetState();

    }



    resetState() {
        this.setState({
            text: ''
        });
    };

    render(){
        return (
            <div className='editor'>
                <textarea
                    rows={5}
                    placeholder='Enter your note here..'
                    className='editor__textarea'
                    value={this.state.value}
                    onChange={this.handleTextChange}
                />

                <button className='editor__button' onClick={this.handleNoteAdd}>Add</button>

            </div>
        );
    }
};

const NotesGrid = React.createClass({
    render(){
        // console.log(this.props);  // проверка
        const {
            notes,
            onNoteDelete
        } = this.props;

        return (
            <div className='grid'>
                {
                    notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            text={note.text}
                            color={note.color}
                            onDelete={() => onNoteDelete(note.id)}
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
            notes: []
        };
    },

    componentDidMount() {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));

        if (savedNotes) {
            this.setState({ notes: savedNotes});
        }
    },

    handleNoteAdd(newNote) {
        this.setState({
            notes: [newNote, ...this.state.notes]
        }, this.saveToLocalStorage);
    },

    handleNoteDelete(noteId) {
        this.setState({
            notes: this.state.notes.filter(note => note.id != noteId)
        }, this.saveToLocalStorage);
    },

    saveToLocalStorage() {
        const notes = JSON.stringify(this.state.notes);

        localStorage.setItem('notes', notes);
    },

    render(){
        return (
            <div className='app'>
                <h2 className='app__header'>NotesApp</h2>

                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid
                    notes={this.state.notes}
                    onNoteDelete={this.handleNoteDelete}
                />

            </div>
        );
    }
});


ReactDOM.render(
    // React.createElement(HelloComponent, { name:

    <NotesApp />,

    document.getElementById('root')
);
