import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light inverse">
              <a className="navbar-brand" href="#"><i className="fa fa-bars"></i></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                  <li className="nav-item active">
                      <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/Favourites">Favourites</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/Settings">Settings</NavLink>
                  </li>
                  </ul>
              </div>
          </nav>
      </div>
    )
  }
}
