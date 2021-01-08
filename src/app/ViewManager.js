import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Dashboard from '../containers/dashboard/Dashboard';
import LoginPage from '../containers/login/LoginPage';
import Sidebar from '../containers/sidebar/Sidebar';
import About from '../components/About/About';

const ProtectedRoute = ({ children }) => {
    return localStorage.getItem('token') ? <>{children}</> : <Redirect to="/login" />
}

function ViewManager() {
    return (
        <Router>
            <Sidebar>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/dashboard">
                        <ProtectedRoute><Dashboard /></ProtectedRoute>
                    </Route>
                    <Route path="/about">
                        <ProtectedRoute>
                            <div>
                                <About />
                            </div>
                        </ProtectedRoute>
                    </Route>
                </Switch>
            </Sidebar>
        </Router>
    )
}

export default ViewManager
