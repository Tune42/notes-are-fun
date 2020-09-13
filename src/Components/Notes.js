import React from 'react';

function Note(props) {
    const handleClickDelete = (e) => {
        e.preventDefault();
        props.removeNote(props.index);
    }

    return(
        <div className='my-note'>
            <article className="message is-primary">
                <div className="message-header">
                    <p>{props.title}</p>
                    <button onClick={handleClickDelete} className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body has-text-black">
                    {props.text}
                </div>
            </article>
        </div>
    )
}

function Notes(props) {
    const renderNotes = () => {
        const notes = []
        props.notes.forEach((note, index) => {
            notes.push(
                <Note key={Math.random()} index={index} title={note.getTitle()} text={note.getText()} removeNote={props.removeNote} />
            )
        })
        return notes;
    }

    return(
        <div className='notes-area'>
            <h1 className='title my-title'>{props.currentCategory}</h1>
            {renderNotes()}
            <button onClick={() => props.addNote(props.currentCategory, '', '')} 
            className='button is-primary my-add-note-button'>Create Note</button>
        </div>
    )
}

export default Notes;