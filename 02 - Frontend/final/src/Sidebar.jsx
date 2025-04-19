import CategoryButton from "./CategoryButton";

function Sidebar({notes, onAddNote, onDeleteNote}) {
  return (
    <div className="app-sidebar">

        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={onAddNote}>Add Note</button>
        </div>            

        <div className="app-sidebar-notes">

            {/* The arrow notation below says:
            "For every `note` item in the state `notes`, apply (`map` it to) the following JSX"

            It is very important that you reference `note` below, NOT `notes`. 
            `note` is a single item, pulled from the array found in the `notes` state*/
            }
            {notes.map((note) => (
                <div className="app-sidebar-note">

                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>


                        {/*The empty inline arrow function is neccesary below, in order to call 
                        `onDeleteNote` when the onClick event happens. Without it, `onDeleteNote` would run immediately 
                        whenever the component renders */
                        }

                        <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                    </div>
                
                    {/*Note the use of conditional rendering below to shorten the output of the preview*/}
                    <p>{note.body && note.body.substring(0,100) + "..."}</p>

                    <small className="note-meta">
                        {/*Here we format the `lastModified` field into a string*/}
                        Last Modified {" "} 
                        
                        {new Date(note.lastModified).toLocaleDateString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </small>

                    <div className="sidebar-note-date">Date</div>
                </div>
            ))}



            
        </div>
    </div>
  )
}

export default Sidebar;