import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Kpi } from "./containers";
import Headers from "./components/Header";
import Footers from "./components/Footers";

class Routers extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Headers />
                    <div className="container" style={{ marginTop: "10px" }}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/kpi" component={Kpi} />
                    </div>
                    <Footers />
                </Router>
            </div>
        );
    }
}

export default Routers;
