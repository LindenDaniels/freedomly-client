import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './NewDebtList.css';

 class NewDebtList extends React.Component {
    
    state = {
        debtName: "",
        debtFolder: "",
        debtAmount: "",
        interestRate: "",
        debtName2: "",
        debtFolder2: "",
        debtAmount2: "",
        interestRate2: "",
        debtName3: "",
        debtAmount3: "",
        interestRate3: "",
        folders: "",
        folderId: "",
        debtId: "",
        id: "",
        formValid: false,
        debtFolderValid: false,
        debtNameValid: false,
        debtAmountValid: false,
        interestRateValid: false,
        validationMessage: null
    }

updateFormEntry(e) {       
        const name = e.target.name;
        const value = e.target.value;
        
        const debtId = Math.floor(Math.random() * 100) + 5;
        let id = Math.floor(Math.random() * 100) + 5;
        
        
        if (e.target.selectedOptions) {
            id = e.target.selectedOptions[0].id;
            this.setState({
                'folderId': id 
            })
        }
        this.setState({
            [e.target.name]: e.target.value,
            id: id
            
        }, () => {this.validateEntry(name, value)});
    }

    validateEntry(name, value) {
        let hasErrors = false;

        value = value.trim();
        
        if ((name === 'debtFolder') || (name === 'debtName') || (name === 'debtAmount') || (name === 'interestRate')) {
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
        
        const { debtFolderValid, debtNameValid, debtAmountValid, interestRateValid } = this.state;
        if (debtFolderValid && debtNameValid && debtAmountValid && interestRateValid === true) {
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
        const { debtFolder, debtName, debtAmount, interestRate, debtName2, debtAmount2, interestRate2, debtName3, debtAmount3, interestRate3, id } = this.state;
        
        const newDebtList = {
            debtFolder: debtFolder,
            debtName: debtName,
            debtAmount: debtAmount,
            interestRate: interestRate,
            debtName2: debtName2,
            debtAmount2: debtAmount2,
            interestRate2: interestRate2,
            debtName3: debtName3,
            debtAmount3: debtAmount3,
            interestRate3: interestRate3,
            id: id
           
        }
        const STORE = this.props.store;
        const folderId = this.state.folderId
       
        const folder = this.props.store.folders.find(folder => +folder.id === +folderId)        


        //const debtFolder = this.props.store.debtFolder
        
        
        folder.debts.push(newDebtList);
        console.log(folder.debts)
        this.props.history.push('/folder-list/');

        this.setState({error: null})
    };


    render() {
        const folders = this.props.store.folders
       
        const options = folders.map((folder) => {
            return (
            <option 
                key ={folder.id} 
                id={folder.id}>
            {folder.name}
            </option>
            )
        })

       
        return (
             <>
            <header>
                <h1>New Debt List</h1>
            </header>
            <section>
            <form 
                className="newdebt-form"
                onSubmit={e => this.handleSubmit(e)}>
                <h2 className="title">Debt Name</h2>
                <div className="form-section">
                  <label htmlFor="debt-name">Debt Name</label>
                  <input 
                    type="text" 
                    className="field"
                    name="debtName" 
                    id="debt-name" 
                    aria-label="debt-name"
                    aria-required="true"
                    placeholder="Car Loan"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <div className="form-section">
                  <label htmlFor="debtFolder">Debt Folder</label>
                  <select 
                    type="text" 
                    className="field"
                    name="debtFolder" 
                    id="debtFolder" 
                    aria-label="folder"
                    aria-required="true"
                    ref={this.debtFolder}
                    onChange={e => this.updateFormEntry(e)}>
                        <option>Select</option>
                        { options }
                    </select>
                </div>
                <div className="form-section">
                  <label htmlFor="debt-amount">Debt Amount</label>
                  <input 
                    type="number" 
                    className="field"
                    name="debtAmount" 
                    id="debt-amount" 
                    aria-label="debt-amount"
                    aria-required="true"
                    placeholder="12000"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <div className="form-section">
                  <label htmlFor="interest-rate">Interest Rate</label>
                  <input 
                    type="number" 
                    className="field"
                    name="interestRate" 
                    id="interest-rate" 
                    aria-label="interest-rate"
                    aria-required="true"
                    placeholder="5"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <h2 className="title">Debt Name</h2>
                <div className="form-section">
                  <label htmlFor="debt-name-2">Debt Name</label>
                  <input 
                    type="text" 
                    className="field"
                    name="debtName2" 
                    id="debt-name-2" 
                    aria-label="debt-name"
                    aria-required="true"
                    placeholder="Car Loan"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <div className="form-section">
                  <label htmlFor="debt-amount-2">Debt Amount</label>
                  <input 
                    type="number" 
                    className="field"
                    name="debtAmount2" 
                    id="debt-amount-2" 
                    aria-label="debt-amount"
                    aria-required="true"
                    placeholder="12000"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <div className="form-section">
                  <label htmlFor="interest-rate-2">Interest Rate</label>
                  <input 
                    type="number" 
                    className="field"
                    name="interestRate2" 
                    id="interest-rate-2" 
                    aria-label="interest-rate"
                    aria-required="true"
                    placeholder="5"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <h2 className="title">Debt Name</h2>
                <div className="form-section">
                  <label htmlFor="debt-name-3">Debt Name</label>
                  <input 
                    type="text" 
                    className="field"
                    name="debtName3" 
                    id="debt-name-3" 
                    aria-label="debt-name"
                    aria-required="true"
                    placeholder="Car Loan"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <div className="form-section">
                  <label htmlFor="debt-amount-3">Debt Amount</label>
                  <input 
                    type="number" 
                    className="field"
                    name="debtAmount3" 
                    id="debt-amount-3" 
                    aria-label="debt-amount"
                    aria-required="true"
                    placeholder="12000"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>
                <div className="form-section">
                  <label htmlFor="interest-rate-3">Interest Rate</label>
                  <input 
                    type="number" 
                    className="field"
                    name="interestRate3" 
                    id="interest-rate-3" 
                    aria-label="interest-rate"
                    aria-required="true"
                    placeholder="5"
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