import React from "react";
import "./CategoryButton.css";

const CategoryButton = ({ label, icon: active, onClick }) => {
  return (<>
    <button
      className={`category-button ${active ? "active" : ""}`}
      onClick={onClick}
    >
    <div className="app-sidebar-note">
                
                <div className="sidebar-note-title">
                    <strong>Title</strong>
                    <button>Delete</button>
                </div>
                
                <p>Note Preview</p>
                <small className="note-meta">Last Modified [date] </small>

                <div className="sidebar-note-date">Date</div>
            </div>
    </button>
    </>
  );
};

export default CategoryButton;