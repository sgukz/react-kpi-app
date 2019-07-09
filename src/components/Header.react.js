// react components
import React, { Component } from "react";

//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// render html
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">
                    KPI Application
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor01"
                    aria-controls="navbarColor01"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/kpi">
                                KPI
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/competency">
                                Competency
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/administrator">
                                Administrator
                            </a>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="btn btn-primary my-2 my-sm-0">
                        Gukz Kim
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary my-2 my-sm-0">
                        หน่วยงาน
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary my-2 my-sm-0">
                        ออกจากระบบ
                    </button>
                </div>
            </nav>
        );
    }
}

export default Header;
