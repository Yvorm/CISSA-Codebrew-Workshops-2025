
function MainContent() {

    return (
        <div className="app-main">
            <div className = "app-main-note-edit">
                <input type="text" id="title" placeholder="Title here..." autoFocus />
                <textarea id="body" placeholder="Write your note here..."/>
            </div>

            <div className="app-main-note-preview">
                
                <h1 className="preview-title"> 
                    Static title :(
                </h1>

                <div className="markdown-preview">
                    Static body :(
                </div>
            </div>    
        </div>
    );
  }
  
  export default MainContent;