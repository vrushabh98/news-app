import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar sticky-top  navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/" style={{color:"#fff",textDecoration:"none"}}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/business" style={{color:"#fff",textDecoration:"none"}}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/sports" style={{color:"#fff",textDecoration:"none"}}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/entertainment" style={{color:"#fff",textDecoration:"none"}}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/health" style={{color:"#fff",textDecoration:"none"}}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/technology" style={{color:"#fff",textDecoration:"none"}}>Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-Link mx-2" to="/science" style={{color:"#fff",textDecoration:"none"}}>Science</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
