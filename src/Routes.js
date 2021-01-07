import React from 'react';
import Home from './core/Home';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

const routing = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
};

export default routing;