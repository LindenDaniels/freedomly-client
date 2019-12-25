import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './NewFolder.css';


 class NewFolder extends React.Component {
    
    state = {
        name: "",
        id: "",
        formValid: false,
        nameValid: false,
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
        
        if ((name === 'name')) {
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
        
        const { nameValid } = this.state;
        if (nameValid === true){
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
        const { name, id } = this.state;
        
        const folder = {
            name: name,
            id: id
           
        }
        const STORE = this.props.store;
        const folders = this.props.store.folders
        
        
        folders.push(folder);
        this.props.history.push('/folder-list');

        this.setState({error: null})
    };


    render() {
       
        return (
             <>
            <header>
                <h1>Create Folder</h1>
            </header>
            <section>
            <form 
                className="createfolder-form"
                onSubmit={e => this.handleSubmit(e)}>
                <h2 className="title">New Folder</h2>
                <div className="form-section">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    className="field"
                    name="name" 
                    id="name" 
                    aria-label="name"
                    aria-required="true"
                    placeholder="Student Loans"
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

    export default withRouter(NewFolder);