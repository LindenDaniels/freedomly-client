import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './NewDebtList.css';

 class NewDebtList extends React.Component {
    
    state = {
        name: "",
        items: "",
        id: "",
        formValid: false,
        nameValid: false,
        itemsValid: false,
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
        
        if ((name === 'name') || (name === 'items')) {
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
        
        const { nameValid, itemsValid } = this.state;
        if (nameValid && itemsValid === true){
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
        const { name, items, id } = this.state;
        
        const list = {
            name: name,
            items: items,
            id: id
           
        }
        const STORE = this.props.store;
        const groceryLists = this.props.store.groceryLists
        
        
        groceryLists.push(list);
        this.props.history.push('/grocery-lists');

        this.setState({error: null})
    };


    render() {
       
        return (
             <>
            <header>
                <h1>Create Grocery List</h1>
            </header>
            <section>
            <form 
                className="creategrocerylist-form"
                onSubmit={e => this.handleSubmit(e)}>
                <h2 className="title">Grocery List</h2>
                <div className="form-section">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    className="field"
                    name="name" 
                    id="name" 
                    aria-label="name"
                    aria-required="true"
                    placeholder="Saturday"
                    onChange={e => this.updateFormEntry(e)}
                    />
                </div>

                
                <div className="form-section">
                  <label htmlFor="items">Items</label>
                  <input 
                    type="text" 
                    className="grocerylist-items"
                    name="items" 
                    id="items" 
                    aria-label="items"
                    aria-required="true"
                    placeholder="Almond Milk"
                    onChange={e => this.updateFormEntry(e)}/>
                    <input 
                    type="text" 
                    className="field"
                    name="items" 
                    id="items-1" 
                    aria-label="items"
                    aria-required="true"
                    placeholder="Almond Milk"
                    onChange={e => this.updateFormEntry(e)}/>
                    <input 
                    type="text" 
                    className="field"
                    name="items" 
                    id="items-2" 
                    aria-label="items"
                    aria-required="true"
                    placeholder="Almond Milk"
                    onChange={e => this.updateFormEntry(e)}/>
                    <input 
                    type="text" 
                    className="field"
                    name="items" 
                    id="items-3" 
                    aria-label="items"
                    aria-required="true"
                    placeholder="Almond Milk"
                    onChange={e => this.updateFormEntry(e)}/>
                    <input 
                    type="text" 
                    className="field"
                    name="items" 
                    id="items-4" 
                    aria-label="items"
                    aria-required="true"
                    placeholder="Almond Milk"
                    onChange={e => this.updateFormEntry(e)}/>
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