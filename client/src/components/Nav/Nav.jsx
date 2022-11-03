import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//NO CAMBIEN EL CLASS COMPONENT A FUNCTIONAL COMPONENT PORQUE SINO LOS TEST NO VAN A CORRER!!!
export default class Nav extends Component {
    render() {
        return (
            <div>
        <Link to="/">Home</Link> 
        <p>       </p> 
        <Link to="/dogs/create/">Create Dog</Link>
            </div>
        )
    }
}
