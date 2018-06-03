import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import App from '../containers'

import Home from '../containers/Home'
import User from '../containers/User'
import Login from '../containers/Login'

class RouterMap extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
				  <Route exact path="/" component={App}/>
					<Route path="/user" component={User}/>
					<Route path="/login" component={Login}/>
				</div>
			</HashRouter>
		)
	}
}

 export default RouterMap