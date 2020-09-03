import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import axios from '../../axios/axios'
import {connect} from 'react-redux'
import classes from './Cards.css'
import Spinner from '../../components/Spinner/Spinner';
class Cards extends Component {
    state={
        character: '',
        data: [],
        loading: true,
        error: false
    }
    componentDidMount = ()=>{
        console.log('[Mount]')
        axios.get('characters').then((response)=>{
            console.log(response.data)
            this.setState({
                character: this.props.character,
                data: response.data,
                loading: false,
                error: false
            })
        }).catch((response)=>{
            this.setState({
                loading: false,
                error: true
            })
        })
    }
    componentDidUpdate = ()=>{
        console.log('[Update]')
        if(this.state.character!==this.props.character){
            console.log('[Axios in Update]')
            axios.get('characters?name='+this.props.character).then((response)=>{
                console.log(response.data)
                this.setState({
                    character: this.props.character,
                    data: response.data,
                    error: false
                })
            }).catch((response)=>{
                this.setState({
                    loading: false,
                    error: true
                })
            })
        }
    }
    render() {
        let content = null
        let content1 = null
        if(this.state.error==true){
            content1 = 'Network error. Check your internet connection.'
        }else{
            if(this.state.loading){
                content1 = (
                    <Spinner/>
                )
            }else{
                if(this.state.data.length===0){
                    content = null
                    content1 = 'No results found...'
                }else{
                    content1 = null
                    content = (
                        this.state.data.map(element=>{
                            if (element.char_id===2) {
                                let img = 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest/scale-to-width-down/350?cb=20120620012441'
                                return(
                                    <div className="col-lg-3 col-md-4 col-sm-6 pt-5">
                                        <Card name={element.name} birthday={element.occupation[0]} nickname={element.nickname} portrayed={element.portrayed} status={element.status} img={img}/>
                                    </div>
                                )
                            }else if(element.char_id===5){
                                let img = "//upload.wikimedia.org/wikipedia/en/thumb/d/db/Hank_Schrader_S5B.png/220px-Hank_Schrader_S5B.png"
                                return(
                                    <div className="col-lg-3 col-md-4 col-sm-6 pt-5">
                                        <Card name={element.name} birthday={element.occupation[0]} nickname={element.nickname} portrayed={element.portrayed} status={element.status} img={img}/>
                                    </div>
                                )
                            } else {
                                return(
                                    <div className="col-lg-3 col-md-4 col-sm-6 pt-5">
                                        <Card name={element.name} birthday={element.occupation[0]} nickname={element.nickname} portrayed={element.portrayed} status={element.status} img={element.img}/>
                                    </div>
                                )
                            }
                        })
                    )
                }
            }
        }
        let myClass = classes.black + ' display-4 pt-5 pb-5'
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    {content}
                </div>
            </div>
            <div className="text-center">
                <h1 className={myClass}>{content1}</h1>
            </div>
            <div className="pt-5"></div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        character: state.headerState.character
    };
};
export default connect(mapStateToProps)(Cards);