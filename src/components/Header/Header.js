import React from 'react'
import Logo from '../../assets/img/logo1.png'
import classes from './Header.css'
import {connect} from 'react-redux'
import * as variables from '../../globalVariables'
import * as actions from './redux/actions/headerActions'
function Header(props) {
    let inputClass = classes.charInput + ' form-control'
    const inputHandler = (event)=>{
        console.log(event.target.value)
        props.searchCharacter(event.target.value)
    }
    return (
        <div className='container'>
            <div className='text-center'>
                <img className='img-fluid pt-5' src={Logo} alt='Logo' width='250px' height='250px'/>
                <br></br>
            </div>
            <div className='pt-4'>
                <div className={classes.pad}>
                    <div className="input-group">
                        <input className={inputClass} onChange={(event)=>{inputHandler(event)}} type="text" placeholder="Search characters..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchCharacter: (name) => dispatch(actions.searchCharacter(name))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);