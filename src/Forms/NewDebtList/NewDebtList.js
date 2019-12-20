import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './NewDebtList.css';

 class NewDebtList extends React.Component {
    
    state = {
        listName: "",
        debtName: "",
        debtAmount: "",
        interestRate: "",
        id: "",
        formValid: false,
        listNameValid: false,
        debtNameValid: false,
        debtAmountValid: false,
        interestRateValid: false,
        validationMessage: null
    }

updateFormEntry(e) {       
        const name = e.target.name;
        const value = e.target.value;
        
        const id = Math.floor(Math.random() * 100) + 5;
        
        
        /*if (e.target.selectedOptions) {
            id = e.target.selectedOptions[0].id;
            this.setState({
                'folderId': id 
            })
        }*/
        this.setState({
            [e.target.name]: e.target.value,
            id: id
            
        }, () => {this.validateEntry(name, value)});
    }

    validateEntry(name, value) {
        let hasErrors = false;

        value = value.trim();
        
        if ((name === 'listName') || (name === 'debtName') || (name === 'debtAmount') || (name === 'interestRate')) {
            if (value.length < 1) {
                hasErrors = true
            } 

            else {
                hasErrors = false
            }
        }
        
        this.setState({
            [`${name}Valid`]: !hasErrors,
        }, this.formValid );
    }

    formValid() {
        
        const { listNameValid, debtNameValid, debtAmountValid, interestRateValid } = this.state;
        if (listNameValid && debtNameValid && debtAmountValid && interestRateValid === true) {
            this.setState({
                formValid: true,
                validationMessage: null
            });
        }
        else {this.setState({
            formValid: !this.formValid,
            validationMessage: 'All fields are required.'
        })}
      }

   /* handleSubmit(e) {
        e.preventDefault();
        const { name, instructions, ingredients  } = this.state;
        const recipe = {
            name: name,
            instructions: instructions,
            ingredients: ingredients,
            //modified: new Date()
        }
        this.setState({error: null})
        GET(STORE), {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'content-type': 'application/json'
            }
        }
        .then(res => {
            if (!res.ok) {
                return res.json().then(err => {
                    console.log(`Error is: ${err}`)
                    throw err
                })
            }
            return res.json()
        }
        .then(data => {
            this.goBack()
            this.context.addRecipe(data)
        })
        .catch(err => {
            this.setState({ err })
        });
    };*/

    handleSubmit(e) {
        e.preventDefault();
        const { listName, debtName, debtAmount, debtInterestRate, id } = this.state;
        
        const debtList = {
            listName: listName,
            debtName: debtName,
            debtAmount: debtAmount,
            debtInterestRate: debtInterestRate,
            id: id
           
        }
        const STORE = this.props.store;
        const debtLists = this.props.store.debtLists
        
        
        debtLists.push(debtList);
        this.props.history.push('/debt-lists');

        this.setState({error: null})
    };


    render() {
       
        return (
             <>
            <header>
                <h1>Create Debt List</h1>
            </header>
            <section>
            <form 
                className="newdebtlist-form"
                onSubmit={e => this.handleSubmit(e)}>
                <h2 className="title">Debt List</h2>
                <div className="form-section">
                  <label htmlFor="list-name">List Name</label>
                  <input 
                    type="text" 
                    className="field"
                    name="list-name" 
                    id="list-name" 
                    aria-label="list-name"
                    aria-required="true"
                    placeholder="Student Loans"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <div className="form-section">
                  <label htmlFor="debt-name">Debt Name</label>
                  <input 
                    type="text" 
                    className="field"
                    name="debt-name" 
                    id="debt-name" 
                    aria-label="debt-name"
                    aria-required="true"
                    placeholder="Sallie Mae"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <div className="form-section">
                  <label htmlFor="debt-amount">Debt Amount</label>
                  <input 
                    type="number" 
                    className="field"
                    name="debt-amount" 
                    id="debt-amount" 
                    aria-label="debt-amount"
                    aria-required="true"
                    placeholder="Sallie Mae"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <div className="form-section">
                  <label htmlFor="interest-rate">Interest Rate</label>
                  <input 
                    type="number" 
                    className="field"
                    name="interest-rate" 
                    id="interest-rate" 
                    aria-label="interest-rate"
                    aria-required="true"
                    placeholder="Sallie Mae"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>

                <div className="buttons">
                 <button 
                    type="button" 
                    className="button"
                    //onClick={()=> this.goBack()}
                    >
                     Cancel
                 </button>
                 <button 
                    type="submit" 
                    className="button"
                    disabled={!this.state.formValid}>
                     Save
                 </button>
                </div>
            </form> 
            </section>
            </>
        )
    }
    }

    export default withRouter(NewDebtList);