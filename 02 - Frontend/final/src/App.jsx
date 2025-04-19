import { useState, useEffect } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import uuid from  "react-uuid";
import './App.css';

function App() {
  
  //Create state array to save notes
  const [notes, setNotes] = useState([]);

  // State to store the currently edited note. Default value is `false`.
  const [activeNote, setActiveNote] = useState(false);

  // This is a function to add a new note, defined using arrow notation.
  // It is defined in the main `App` component as it relies on the `notes` state.
  const onAddNote = () => {

    console.log("Added new note");

    //Everything below defines the default information of a newly created note
    const newNote = {
      id: uuid(), //This is the `key` value of a list item. It must be unique.

      title: "Untitled Note",

      body: "",
      
      lastModified: Date.now()
    };

    //Set the `notes` state to be a new array containing `newNote`, plus all the 
    //elements of the previous `notes` state. Note the usage of the `spread` operator.
    setNotes([newNote, ...notes])
  }

  // This is a function to delete a specified note, defined using conventional notation.
  // It is defined in the main `App` component as it relies on the `notes` state.
  function onDeleteNote(idToDelete) {

    console.log("Removed note");

    //Explaination: For each `note` in `notes`, filter out items for which the given 
    // condition (i.e. `note.id` == `idToDelete`) is TRUE. The remaining items will be made 
    // into the new `notes` state. 
    setNotes(notes.filter((note) => note.id !== idToDelete))

  }
  
  return (
  <>
  <title>CISSA NotesApp 2025 :)</title>
  
  <div className='App'>

  <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
  <MainContent/>
  </div>
  </>
  );

}

export default App
