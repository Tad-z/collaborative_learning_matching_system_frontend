import React from 'react'
import './HomePage.css';
import { Link } from 'react-router-dom';
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header title="Home Page" />
      <header className="header">
        <div className="headerContainer">
          <div className="headerContainerInner">
            <h1>We got you covered</h1>
            <p>
              Effortlessly Create Balanced Student Groups For Enhanced Collaboration
            </p>
            <Link to="/login" className="btn">Get Started</Link>
          </div>
        </div>
      </header>
    </>

  )
}

export default HomePage