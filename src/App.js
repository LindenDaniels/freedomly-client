
import React, { Component } from 'react';
import { Route, Link, withRouter, Switch } from 'react-router-dom';
import NewDebtList from './Forms/NewDebtList/NewDebtList';
import NewFolder from './Forms/NewFolder/NewFolder';
import STORE from './STORE'
//import config from './config';
import './App.css';
import CalculateFreedomDate from './Forms/CalculateFreedomDate/CalculateFreedomDate';
import NewDebt from './Forms/NewDebt/NewDebt'
import SignUpForm from './Forms/SignUpForm/SignUpForm'
import LandingPage from './Landings/Landing/Landing';
import FreedomDate from './FreedomDate/FreedomDate';
import FolderList from './Lists/FolderList/FolderList';
import NavBar from './NavBar/NavBar'
import DebtList from './Lists/DebtList/DebtList'

class App extends Component {
  /*static defaultProps = {
    store: {
      debtList: [],
    }
  };*/
  render() {

    return (

      <div className='App'>


        <div className='content' aria-live='polite'>
          <NavBar />
          <Switch>
            <Route
              exact path='/'
              render={() => <LandingPage
                store={STORE}
              />}
            />
            <Route
              path='/freedom-date'
              render={() => <FreedomDate
                store={STORE}
              />}
            />

            <Route
              path='/new-debt-list'
              render={(props) => <NewDebtList {...props}
                store={STORE}
              />}
            />
            <Route
              path='/new-folder'
              render={() => <NewFolder
                store={STORE}
              />}
            />
            <Route
              path='/new-freedom-date'
              render={() => <CalculateFreedomDate
                store={STORE}
              />}
            />

            <Route
              path='/new-debt'
              render={(props) => <NewDebt {...props}
                store={STORE}
              />}
            />

            <Route
              path='/signup-form'
              render={() => <SignUpForm
                store={STORE}
              />}
            />
            <Route
              path='/folder-list'
              render={() => <FolderList
                store={STORE}
              />}
            />
            <Route
              path="/folder/:folderId"
              render={(props) => <DebtList {...props} store={STORE} />}
            />
          </Switch>
        </div>
      </div>

    );
  }
}

export default App;