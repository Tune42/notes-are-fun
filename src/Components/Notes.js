import React from 'react';

function Note(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.removeNote(props.index);
    }

    return(
        <div className='my-note'>
            <article className="message is-primary">
                <div className="message-header">
                    <p>{props.title}</p>
                    <button onClick={handleClick} className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body has-text-black">
                    {props.text}
                </div>
            </article>
        </div>
    )
}

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    renderNotes = () => {
        const notes = []
        this.props.notes.forEach((note, index) => {
            notes.push(
                <Note key={Math.random()} index={index} title={note.getTitle()} text={note.getText()} removeNote={this.props.removeNote} />
            )
        })
        return notes;
    }

    render() {
        return(
            <div className='notes-area'>
                <h1 className='title my-title'>{this.props.currentCategory}</h1>
                {this.renderNotes()}
                <button onClick={() => this.props.addNote(this.props.currentCategory, '', '')} 
                className='button is-primary my-add-note-button'>Create Note</button>
            </div>
        )
    }
}

export default Notes;