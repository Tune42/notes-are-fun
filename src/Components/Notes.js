import React from 'react';

function Notes() {
    return(
        <div className='notes-area'>
            <Note />
            <Note />
        </div>
    )
}

function Note() {
    return (
        <div className='my-note'>
            <article class="message is-primary">
                <div class="message-header">
                    <p>Note Title</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body has-text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
            </article>
        </div>
    )
}

export default Notes;