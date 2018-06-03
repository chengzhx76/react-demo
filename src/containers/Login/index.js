import React from 'react'
import {Route, Link, Switch } from 'react-router-dom'
class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Login
                <li><Link to='/home'>Home</Link></li>
            </div>
        )
    }
}

export default Login