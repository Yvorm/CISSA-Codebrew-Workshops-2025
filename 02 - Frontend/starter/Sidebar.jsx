
function Sidebar() {
  return (
    <div className="app-sidebar">

        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button>Add Note</button>
        </div>            

        <div className="app-sidebar-notes">
    
                <div className={`app-sidebar-note`}>

                    <div className="sidebar-note-title">
                        <strong>Note title :(</strong>

                        <button>Delete</button>
                    </div>
                
                    <p>Static body preview :(</p>

                    <small className="note-meta">
                        
                        "Last Modified Sometime :(" 
                        
                    </small>
                </div>
        </div>
    </div>
  )
}

export default Sidebar;