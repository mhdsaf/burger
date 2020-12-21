import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/action'
import axios from 'axios'
class homepage extends Component {
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            this.props.saveQuestions(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    inputHandler = (event)=>{
        this.props.saveQuestions(event.target.value)
        console.log(event.target.value)
    }
    render() {
        return (
            <div>
                <h1>Homepage</h1>
                <input onChange={(event)=>{this.inputHandler(event)}} type="text" placeholder="Search characters..."/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveQuestions: (name) => dispatch(actions.saveQuestions(name))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(homepage);