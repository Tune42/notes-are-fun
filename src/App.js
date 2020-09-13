/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import Menu from './Components/Menu.js';
import Notes from './Components/Notes.js';
import Note from './Modules/notes.js';

class App extends React.Component {
  constructor(props){
    super();
    this.state={
      allNotes : {},
      selectedCategory : ''
    }
  }

  addCategory = category => {
    const allNotes = this.state.allNotes;
    // only if category doesn't already exist
    allNotes[category] = [];
    this.setState({
      allNotes : allNotes,
    })
    // only if category doesn't already exist
  }

  switchCategory = category => {
    this.setState({
      selectedCategory : category,
    })
  }

  addNote = (category, subject, body) => {
    const allNotes = this.state.allNotes;
    if (allNotes[category]) {
      allNotes[category].push(Note(subject, body)); 
    } else {
      alert('Please create/select a category first!');
    }
    this.setState({
      allNotes : allNotes,
    })
  }

  removeNote = (index) => {
    console.log(index);
    const allNotes = this.state.allNotes;
    allNotes[this.state.selectedCategory].splice(index, index);
    this.setState({
      allNotes : allNotes,
    })
  }

  getCategories = () => {
    const allNotes = this.state.allNotes;
    const categories = []
    for (const [key, value] of Object.entries(allNotes)) {
      categories.push(key);
    }
    return categories;
  }

  getNotes = () => {
    const allNotes = this.state.allNotes;
    const selectedNotes = []
    if (allNotes[this.state.selectedCategory]) {
      allNotes[this.state.selectedCategory].forEach(note => {
        selectedNotes.push(note);
      })
    }
    return selectedNotes;
  }

  render() {
    return(
      <div className="App">
        <Menu addCategory={this.addCategory} categories={this.getCategories()} switchCategory={this.switchCategory} />
        <Notes notes={this.getNotes()} addNote={this.addNote} currentCategory={this.state.selectedCategory}
        removeNote={this.removeNote} />
      </div>
    )
  }
}

export default App;
