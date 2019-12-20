  
import React, { Component } from 'react';
import { Route, Link, withRouter} from 'react-router-dom';
import NewDebtList from './Forms/NewDebtList/NewDebtList';
//import STORE  from './STORE'
//import config from './config';
import './App.css';

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
            path='/new-debt-list'
            render={() => <NewDebtList
                           //store={STORE}
            />}
          />
         
        </div>
      </div>
      
    );
  }
}

export default App;