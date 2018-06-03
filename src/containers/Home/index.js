import React from 'react'

import { Link } from 'react-router-dom'



/*class Home extends React.Component {
	constructor(props) {
		super(props)
	}

	render( {match} ) {
		return (
			<div className='home'>
					<ul>
						<li><Link to={`${match.url}/login`}>Login</Link></li>
						<li><Link to={`${match.url}/user`}>User</Link></li>
					</ul>

					<Route path={`${match.url}/login`} component={Login}/>
					<Route path={`${match.url}/user`} component={User}/>

			</div>
		)

	}
}*/

const Home = ({ match }) => (
	<div>
  	<Link to='user'>User</Link>
  </div>
)

export default Home