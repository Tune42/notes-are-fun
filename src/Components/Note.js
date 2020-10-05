import React from 'react';

class Note extends React.Component {
    constructor(){
        super();
        this.state={
            editingTitle : false,
            editingText : false,
            titleInput : '',
            textInput : '',
        }
    }

    handleClickDelete = (e) => {
        e.preventDefault();
        this.props.removeNote(this.props.index);
    }

    titleEditToggle = (e) => {
        e.preventDefault();
        const editingTitle = this.state.editingTitle;
        if (this.props.title) {
            this.setState({
                titleInput : this.props.title,
            })
        }
        this.setState({
            editingTitle : !editingTitle,
        })
    }

    textEditToggle = (e) => {
        e.preventDefault();
        const editingText = this.state.editNoteText;
        if (this.props.text) {
            this.setState({
                textInput : this.props.text
            })
        }
        this.setState({
            editingText : !editingText
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            titleInput : e.target.value
        })
    }

    handleTitleSubmit = (e) => {
        e.preventDefault();
        this.props.editNoteTitle(this.props.index, this.state.titleInput);
    }

    handleTextChange = (e) => {
        this.setState({
            textInput : e.target.value
        })
    }

    handleTextSubmit = (e) => {
        e.preventDefault();
        this.props.editNoteText(this.props.index, this.state.textInput);
    }

    render() {
        return(
            <div className=''>
                <article className="message is-primary my-note">
                    <div className="message-body has-text-black my-message">
                        <div className='level my-note-title'>
                            {this.state.editingTitle ? (<form onSubmit={this.handleTitleSubmit}>
                            <input type="text" onChange={this.handleTitleChange} value={this.state.titleInput}
                            className="input is-primary is-small" maxLength={50} /></form>) : <p>{this.props.title}</p>}
                            <div>
                                <span className="icon">
                                    <i onClick={this.titleEditToggle} className="fa fa-edit"></i>
                                </span>
                                <button onClick={this.handleClickDelete} className="delete" aria-label="delete"></button>
                            </div>
                        </div>
                        {this.state.editingText ? (<textarea onChange={this.handleTextChange} value={this.state.textInput}
                        className="input is-primary my-text-field" />) : this.props.text}
                        <p>
                            {!this.state.editingText ? 
                            (<span className='icon'>
                                <i onClick={this.textEditToggle} className='fa fa-edit'></i>
                            </span>) :
                            (<span className='icon'>
                                <i onClick={this.handleTextSubmit} className='fa fa-check'></i>
                            </span>)}
                        </p>
                    </div>
                </article>
            </div>
        )
    }
}

export default Note;