import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../redux/action'
const fetch = (props) => {
    return (
        <div>
            {props.character}
        </div>
    );
}
const mapStateToProps = state => {
    console.log(state)
    return {
        character: state.questionState.character
    };
};
export default connect(mapStateToProps)(fetch);