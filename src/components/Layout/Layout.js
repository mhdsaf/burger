import React from 'react'
import classes from './Layout.css';
import Header from '../Header/Header'
import Cards from '../../containers/Cards/Cards'
function Layout(props) {
    return (
        <div className={classes.background}>
            {props.children}
        </div>
    )
}

export default Layout
