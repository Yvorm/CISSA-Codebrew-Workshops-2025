import { useState, useEffect } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import uuid from  "react-uuid";
import './App.css';
import './Sidebar.css';
import './MainContent.css';

function App() {
  

    // The below states/functions are created in this "higher-order" component (that contains the other components) as they 
    // contain information needed concurrently in BOTH "child" components (Sidebar and MainComponent)

    //Create state to save notes, and set it to be an empty array by default. Note that `setNotes` is state-setter 
    const [notes, setNotes] = useState([]);

    // State to store the currently edited note. Default value is `false`.
    const [activeNote, setActiveNote] = useState(false);

    
    // NOTE: All of the below functions are defined in the main `App` component as they 
    // rely on the `notes` state and `setNotes`, which we have chosen not passed into child 
    // components for abstraction's sake.
    

    // This is a function to add a new note, defined using arrow notation.
    const onAddNote = () => {

    console.log("Added new note");

    //Everything below defines the default information of a newly created note
    const newNote = {
        id: uuid(), //This is the `key` value of a list item. It must be unique to identify the item in the array.

        title: "Untitled Note",

        body: " ",
        
        lastModified: Date.now()
    };

    //Set the `notes` state to be a new array containing `newNote`, plus all the 
    //elements of the previous `notes` state. Note the usage of the `spread` operator.
    setNotes([newNote, ...notes])
    }

    // This function deletes a specified note, and is defined using "conventional" notation more resembling of python.
    function onDeleteNote(idToDelete) {

    console.log("Deleted note");

    // Explaination: For each `note` in `notes`, filter OUT (eliminate) items for which the given 
    // condition (i.e. `note.id` == `idToDelete`) is TRUE. The remaining items will be made 
    // into the new `notes` state. 
    setNotes(notes.filter((note) => note.id !== idToDelete))

    }

    const onUpdateNote = (updatedNote) => {
        // Create an entirely new array to replace the `notes` state, by looping through each element of `notes`, and 
        // replacing the currently active note with the new (updated) note passed into the function. 
        //
        // All non-active notes are just copied over to the new array, before it is set as the new `notes` state.
        const updatedNotesArray = notes.map((note) => {
            if (note.id === activeNote) {
                return updatedNote
            } else {
                return note;
            }
        });

        // Make the new notes array the `notes` array
        setNotes(updatedNotesArray);
    }

    // This function returns the note object that is currently listed as `active` in the `activeNote` state.
    const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
    }

    return (
    <>
    <title>CISSA NotesApp 2025 :)</title>

    <div className='App'>

    {/*Here we are passing a variety of states, state-setters and functions as props, so that other components can access them*/}
    <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote}/>
    
    {/*NOTE that here we WANT the `getActiveNote` function to be called (and it's result passed into MainContent) every time it renders. 
    Therefore, we do NOT need to append an empty function call `() =>` to the beginning.*/}
    <MainContent activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
    </div>
    </>
    );

}

export default App
