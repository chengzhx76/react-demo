import React from 'react'

import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom'

import Home from './Home'
import User from './User'
import Login from './Login'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<div className='app'>
					<div className='menus'>
						<ul>
							<li><Link to='/'>首页</Link></li>
							<li><Link to='/user'>个人中心</Link></li>
							<li><Link to='/login'>登陆</Link></li>
						</ul>
					</div>
				</div>
		)
	}
}

export default App