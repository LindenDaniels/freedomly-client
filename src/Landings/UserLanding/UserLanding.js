import React from 'react';
import './UserLanding.css';

export default function UserLanding(props) {
    return (
  <>
    <section className = "landing">
      <header className="landing-header">
        <h1>Freedomly</h1>
        <h2>Welcome.</h2>
      </header>
    </section>
      <section className="userlanding-intro">
        <header>
            <h3>What would you like to do today?</h3>
        </header>
        <p>[<em>placeholder for links to various components</em>]</p>
      </section>
      <section className="landing-date">
        <header>
            <h3>Your Freedom Date</h3>
        </header>
        <p>[<em>placeholder for user/'s freedom date</em>]</p>
      </section>
      <section className="logout-form">
      <p>[<em>placeholder for logout form</em>]</p>
      </section>
      
    <footer role="content-info">Footer</footer>
    
    </>

  )}