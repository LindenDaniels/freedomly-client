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


    render() {

        const folders = this.props.store.folders.filter(folder => +folder.id === +this.props.match.params.folderId)
        //const folderName = this.props.store.folders.name.filter(folder => +folder.name === +this.props.match.params.folderName)
        return (

            <>
                <header>
                    <h1></h1>
                </header>
                <section className='DebtList'>
                    <ul id="debts__list">
                        {folders.map(folder => {
                            return folder.debts.map((debt) =>
                                <li>
                                    {debt.debtName}
                                    {debt.debtAmount}
                                    {debt.interestRate}
                                    {debt.debtName2}
                                    {debt.debtAmount2}
                                    {debt.interestRate2}
                                    {debt.debtName3}
                                    {debt.debtAmount3}
                                    {debt.interestRate3}


                                </li>
                            )
                        })}
                    </ul>
                </section>
            </>

        )
    }

}


DebtList.propType = {
    match: PropTypes.object.isRequired
};