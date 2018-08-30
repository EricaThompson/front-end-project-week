import React, { Component } from 'react';
import './index.css';
import NotesList from '../NotesList/NoteList';

class MainContent extends Component {
    render() {
        return (
            <div className="main_container">
                <NotesList />
            </div>
        )
    }
}

export default MainContent;