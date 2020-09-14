/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import Menu from './Components/Menu.js';
import Notes from './Components/Notes.js';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      allNotes : {},
      selectedCategory : '',
    };
  }

  componentDidMount = () => {
    const allNotes = JSON.parse(localStorage.getItem('allNotes'));
    this.setState({
      allNotes : allNotes,
    })
  }

  addCategory = category => {
    const allNotes = this.state.allNotes;
    if (!allNotes[category]) {
      allNotes[category] = [];
    }
    this.setState({
      allNotes : allNotes,
      selectedCategory : category,
    })
  }

  switchCategory = category => {
    this.setState({
      selectedCategory : category,
    })
  }

  removeCategory = category => {
    const sure = window.confirm("Are you sure you want to delete this category along with all of its notes?");
    if (sure) {
      const allNotes = this.state.allNotes;
      delete allNotes[category];
      this.setState({
        notes : allNotes,
        selectedCategory : '',
      })
    }
  }

  addNote = (category, subject, body) => {
    const allNotes = this.state.allNotes;
    if (allNotes[category]) {
      allNotes[category].push([subject, body]); 
    } else {
      alert('Please create/select a category first!');
    }
    this.setState({
      allNotes : allNotes,
    })
  }

  removeNote = (index) => {
    const allNotes = this.state.allNotes;
    if (index !== 0) {
      allNotes[this.state.selectedCategory].splice(index, index);
    } else {
      allNotes[this.state.selectedCategory].shift();
    }
    this.setState({
      allNotes : allNotes,
    })
  }

  editNoteTitle = (index, value) => {
    const allNotes = this.state.allNotes;
    allNotes[this.state.selectedCategory][index][0] = value;
    this.setState({
      allNotes : allNotes,
    })
  }

  editNoteText = (index, value) => {
    const allNotes = this.state.allNotes;
    allNotes[this.state.selectedCategory][index][1] = value;
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

  saveNotes = () => {
    const allNotes = this.state.allNotes;
    localStorage.setItem('allNotes', JSON.stringify(allNotes));
  }

  render() {
    return(
      <div className="App">
        <Menu addCategory={this.addCategory} categories={this.getCategories()} switchCategory={this.switchCategory} />
        <Notes notes={this.getNotes()} addNote={this.addNote} currentCategory={this.state.selectedCategory} 
        removeNote={this.removeNote} editNoteTitle={this.editNoteTitle} editNoteText={this.editNoteText} 
        removeCategory={this.removeCategory} saveNotes={this.saveNotes} />
      </div>
    )
  }
}

export default App;
