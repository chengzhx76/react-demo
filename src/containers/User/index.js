import React from 'react'
import { Link } from 'react-router-dom'

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <li><Link to='/user/sub'>测试</Link></li>
            </div>
        )
    }
}
export default User