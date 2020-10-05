import React from 'react';
import Note from './Note';

function Notes(props) {
    const renderNotes = () => {
        const notes = []
        props.notes.forEach((note, index) => {
            notes.push(
                <Note key={Math.random()} index={index} title={note[0]} text={note[1]} 
                editNoteTitle={props.editNoteTitle} removeNote={props.removeNote}
                editNoteText={props.editNoteText} />
            )
        })
        return notes;
    }

    return(
        <div className='my-notes'>
            <h1 className='title my-title'>{props.currentCategory}
                {props.currentCategory !== '' ? 
                (<span className='icon ml-5'>
                    <i onClick={() => props.removeCategory(props.currentCategory)} className='fa fa-trash'></i>
                </span>) : <p>No Category Selected</p>}
            </h1>
            <div className='notes-area'>
                {renderNotes()}
                <button onClick={props.saveNotes} className='button is-link my-save-notes-button'>Save Notes</button>
                <button onClick={() => props.addNote(props.currentCategory, 'New Note', 'Click the pencil to edit!')} 
                className='button is-primary my-add-note-button'>Create Note</button>
            </div>
        </div>
    )
}

export default Notes;