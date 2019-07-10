import React, { Component } from 'react';
import {Home as Homes} from '../components';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col col-lg-6">
                    <Homes/>
                </div>
                
            </div>
        );
    }
}

export default Home;