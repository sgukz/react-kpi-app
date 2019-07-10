import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" exact to="/">
                    KPI Application
                </Link>
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
                            <Link className="nav-link" exact to="/">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/kpi">
                                KPI
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/competency">
                                Competency
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/administrator">
                                Administrator
                            </Link>
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
