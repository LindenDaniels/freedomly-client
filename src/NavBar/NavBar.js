import React, { Component } from 'react'
import { Route, Link, NavLink, withRouter } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends Component {
    //static contextType = GroceryContext;
  
  
    render() {
      //const { recipes=[] } = this.context
  
      return (
        <div className='NavBar'>
            <NavLink
                className='nav-link'
                to='/'>
                    Home
            </NavLink>
          
         
            <NavLink
               className='nav-link'
               to='/folder-list'>
                   My Debts
            </NavLink>
            <NavLink
               className='nav-link'
               to='/new-debt'>
                   New Debt
            </NavLink>
            <NavLink
               className='nav-link'
               to='/new-debt-list'>
                   New Debt List
            </NavLink>
            
            <NavLink
               className='nav-link'
               to='/new-folder'>
                   New Folder
            </NavLink>
            
            
          
        </div>

      )
    }
  }