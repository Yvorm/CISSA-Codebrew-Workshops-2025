function MainContent({activeNote, onUpdateNote}) {

    function onEditField(textFieldKey, editedValue) {
        // We need to pass through a NEW note, with the new info, EXCEPT id.
        onUpdateNote({
            // This spreads out the elements of the active note.
            ...activeNote,
            
            [textFieldKey]: editedValue,
            lastModified: Date.now()
        });
    };

    // We NEED to accound for the case where there is no current activeNote, otherwise 
    // the rendering will fail below when we try to access the activeNote attributes.
    if(!activeNote) {
        return ( 
            <div className="no-active-note"> 
                <h6>No note selected. Create or select one to get started.</h6>
            </div>
        )}

    return (
        <div className="app-main">
            <div className = "app-main-note-edit">
                <input type="text" id="title" placeholder="Title here..." value = {activeNote.title} autoFocus />
                <textarea id="body" placeholder="Write your note here..." value = {activeNote.body}/>
            </div>

            {/* Whatever the current activeNote is, preview it's stored information*/}
            <div className="app-main-note-preview">
                
                <h1 className="preview-title"> 
                    {activeNote.title}
                </h1>

                <div className="markdown-preview">
                    {activeNote.body}
                </div>

            </div>    
        </div>
    );
  }
  
  export default MainContent;