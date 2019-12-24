import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './FolderList.css'

//import GroceryContext from '../Contexts/GroceryContext'
//import Recipe from '../Recipe/Recipe'
//import { getNotesForFolder } from '../NotesHelpers'



export default class FolderList extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  //static contextType = GroceryContext;

  render() {
    //const { folderId } = this.props.match.params
    //const { recipe =[] } = this.context
    //const notesForFolder = getNotesForFolder(notes, folderId)

    const folders = this.props.store.folders
    return (
        <>
        <header>
            <h1>Folder List</h1>
        </header>
      <section className='FolderList'>
        <ul id="folder__list">
          {folders.map(folder => 
            <li key={folder.id}>
                <NavLink
                aria-controls="folder__list"
                className='folder__folder-link'
                to={`/folder/${folder.id}`}
              >
                {folder.name}
              </NavLink>
              
              
            </li>
          )}
        </ul>
      </section>
      </>
    )
  }

}


FolderList.propType = {
  match: PropTypes.object.isRequired
};