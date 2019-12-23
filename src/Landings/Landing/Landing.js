import React from 'react';
import './Landing.css';
import SignUpForm from '../../Forms/SignUpForm/SignUpForm';
export default function LandingPage(props) {
    return (
  <>
    <section className = "landing">
      <header className="landing-header">
        <h1>Freedomly</h1>
        <h2>Imagine freedom from debt.</h2>
      </header>
    </section>
      <section className="landing-intro">
        <header>
            <h3>List Your Debts</h3>
        </header>
        <p>[<em>placeholder for screenshot of debt list interface</em>]</p>
        <p>Create a list of your debts, and we'll sort them by your preferred method: snowball (lowest first) or avalanche (highest interest first).</p>
      </section>
      <section className="landing-date">
        <header>
            <h3>Your Freedom Date</h3>
        </header>
        <p>[<em>placeholder for screenshot of freedom date page</em>]</p>
        <p>Get a debt-free date that updates as you add or remove debts. The debt free date is based on your monthly payment amount and whether you chose the snowball or avalanche method.</p>
      </section>
      <section className="landing-signup">
      <SignUpForm />
      </section>
      
      
   
    <footer role="content-info">Footer</footer>
    
    </>

  )}