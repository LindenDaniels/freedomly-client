import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './NewDebt.css';

 class NewDebt extends React.Component {
    
    state = {
        debtName: "",
        debtFolder: "",
        debtAmount: "",
        interestRate: "",
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
        const { debtFolder, debtName, debtAmount, interestRate, id } = this.state;
        
        const newDebt = {
            debtFolder: debtFolder,
            debtName: debtName,
            debtAmount: debtAmount,
            interestRate: interestRate,
            id: id
           
        }
        const STORE = this.props.store;
        const folders = this.props.store.folders.find(folder => +folder.id === +this.props.match.params.folderId)
        const folderId = this.state.folderId


        //const debtFolder = this.props.store.debtFolder
        
        
        folders.push(newDebt);
        this.props.history.push('/folders/');

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
                <h1>New Debt</h1>
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

    export default withRouter(NewDebt);