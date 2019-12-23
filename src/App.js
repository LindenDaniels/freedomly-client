  
import React, { Component } from 'react';
import { Route, Link, withRouter} from 'react-router-dom';
import NewDebtList from './Forms/NewDebtList/NewDebtList';
import NewFolder from './Forms/NewFolder/NewFolder';
//import STORE  from './STORE'
//import config from './config';
import './App.css';
import CalculateFreedomDate from './Forms/CalculateFreedomDate/CalculateFreedomDate';
import NewDebt from './Forms/NewDebt/NewDebt'
import SignUpForm from './Forms/SignUpForm/SignUpForm'
import LandingPage from './Landings/Landing/Landing';
import FreedomDate from './FreedomDate/FreedomDate';

class App extends Component {
  static defaultProps = {
    store: {
      debtList: [],
    }
  };
  render() {
    
    return (
      
      <div className='App'>
     
    
        <div className='content' aria-live='polite'>
        <Route
            exact path='/'
            render={() => <LandingPage
                           //store={STORE}
            />}
          />
          <Route
            path='/freedom-date'
            render={() => <FreedomDate
                           //store={STORE}
            />}
          />
          
          <Route
            path='/new-debt-list'
            render={() => <NewDebtList
                           //store={STORE}
            />}
          />
          <Route
            path='/new-folder'
            render={() => <NewFolder
                           //store={STORE}
            />}
            />
             <Route
            path='/new-freedom-date'
            render={() => <CalculateFreedomDate
                           //store={STORE}
            />}
            />

<Route
            path='/new-debt'
            render={() => <NewDebt
                           //store={STORE}
            />}
            />

<Route
            path='/signup-form'
            render={() => <SignUpForm
                           //store={STORE}
            />}
            />
         
        </div>
      </div>
      
    );
  }
}

export default App;