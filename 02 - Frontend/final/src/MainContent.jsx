function MainContent() {
    return (
        <div className="app-main">
            <div className = "app-main-note-edit">
                <input type="text" id="title" placeholder="Title here..." autoFocus />
                <textarea id="body" placeholder="Write your note here..."/>
            </div>
            <div className="app-main-note-preview">
                
                <h1 className="preview-title">TITLE</h1>
                <div className="markdown-preview">note preview</div>

            </div>    
        </div>
    );
  }
  
  export default MainContent;