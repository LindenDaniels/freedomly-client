import React from 'react';
import './FreedomDate.css';

export default function FreedomDate(props) {
    return (
  <>
    <section className = "freedom-date">
      <header className="freedom-header">
        <h1>Your Freedom Date</h1>
      </header>
    </section>
      <section className="freedom-freedomdate">
        <header>
            <h3>Your freedom date is</h3>
        </header>
        <p>[<em>placeholder for user's calculated freedom date</em>]</p>
      </section>
    <footer role="content-info">Footer</footer>
    
    </>

  )}