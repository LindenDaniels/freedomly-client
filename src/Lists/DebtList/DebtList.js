import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './DebtList.css'

//import GroceryContext from '../Contexts/GroceryContext'
//import Recipe from '../Recipe/Recipe'
//import { getNotesForFolder } from '../NotesHelpers'



export default class DebtList extends Component {
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
            <h1>Debt List</h1>
        </header>
      <section className='DebtList'>
        <ul id="debts__list">
          {folders.debts.map((debt) =>
          <li>
          {debt.debtName}
          {debt.debtAmount}
          {debt.interestRate}
          
          }
            </li>
          )}
        </ul>
      </section>
      </>
    )
  }

}


DebtList.propType = {
  match: PropTypes.object.isRequired
};