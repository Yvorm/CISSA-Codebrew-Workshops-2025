import { useState, useEffect } from 'react';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import uuid from  "react-uuid";
import './App.css';
import './Sidebar.css';
import './MainContent.css';

function App() {

    return (
    <>
    <title>CISSA NotesApp 2025 :)</title>

    <div className='App'>

    <Sidebar/>
    
    <MainContent/>
    </div>
    </>
    );

}

export default App
