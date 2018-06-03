import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import App from '../containers'
import Home from '../containers/Home'
import User from '../containers/User'
import UserSub from '../containers/User/Sub'
import Login from '../containers/Login'

class RouterMap extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
				 	<Route exact path="/" component={App}/>
				 	<Route exact path="/home" component={Home}/>
					<Route exact path="/user" component={User}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path='/user/sub' component={UserSub}/>
				</Switch>
			</HashRouter>
		)
	}
}

 export default RouterMap