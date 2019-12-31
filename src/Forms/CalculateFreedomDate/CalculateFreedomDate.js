import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './CalculateFreedomDate.css';

 class CalculateFreedomDate extends React.Component {
    
    state = {
        debtLists: "",
        monthlyPayment: "",
        freedomDate: "",
        id: "",
        formValid: false,
        debtListsValid: false,
        monthlyPaymentValid: false,
        validationMessage: null,
        /*checkboxes: OPTIONS.reduce(
            (options, option) => ({
              ...options,
              [option]: false
            }),
        {}
        )*/
    }

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
    
        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
        }));
      };

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
        
        if ((name === 'debtLists') || (name === 'monthlyPayment')) {
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
        
        const { debtListsValid, monthlyPaymentValid } = this.state;
        if (debtListsValid && monthlyPaymentValid === true) {
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
        const { debtLists, monthlyPayment, id } = this.state;
        
        const newFreedomDate = {
            debtLists: debtLists,
            monthlyPayment: monthlyPayment,
        }
        const STORE = this.props.store;
        const freedomDates = this.props.store.freedomDates
        
        
        freedomDates.push(newFreedomDate);
        this.props.history.push('/freedom-dates');

        this.setState({error: null})
    };


    render() {
        const folders = this.props.store.folders

       /*const options = folders.map((folder) => {
            return (
                <option
                    key={folder.id}
                    id={folder.id}>
                    {folder.name}
                </option>
            
        })*/
        

       
        return (
             <>
            <header>
                <h1>New Freedom Date</h1>
            </header>
            <section>
            <form 
                className="newfreedomdate-form"
                onSubmit={e => this.handleSubmit(e)}>
                <h2 className="title">Calculate Freedom Date</h2>
                <div className="form-section">
                  <label htmlFor="debt-lists">Select Debt Lists to Include</label>
                  <input
                                type="checkbox"
                                className="field"
                                name="debtFolder"
                                /*value={options}*/
                                id="debtFolder"
                                aria-label="folder"
                                aria-required="true"
                                ref={this.debtFolder}
                                onChange={e => this.updateFormEntry(e)}>
                             
                    </input>
                    
                    
                </div>
                <div className="form-section">
                  <label htmlFor="monthly-payment">Monthly Payment</label>
                  <input 
                    type="number" 
                    className="field"
                    name="monthly-payment" 
                    id="monthly-payment" 
                    aria-label="monthly-payment"
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

    export default withRouter(CalculateFreedomDate);