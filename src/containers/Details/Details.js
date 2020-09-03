import React, { Component } from 'react';
import classes from './Details.css'
import axios from '../../axios/axios'
import Spinner from '../../components/Spinner/Spinner'
class Details extends Component {
    state = {
        quotes: [],
        deaths: [],
        count: null,
        loading: true
    }
    componentDidMount = ()=>{
        let filteredArr = []
        let quotes = []
        let count = null
        axios.get('deaths').then((response)=>{
            let name = this.props.match.params.name
            response.data.forEach(element => {
                if(element.responsible.includes(name)){
                    filteredArr.push(element)
                } 
            });
            count = filteredArr.length
            axios.get('quote?author=' + this.props.match.params.name).then((response)=>{
                quotes = [...response.data]
                this.setState({
                    quotes: quotes,
                    deaths: filteredArr,
                    count: count,
                    loading : false
                })
            })
        })
    } 
    render() {
        console.log(this.state)
        let div = classes.font + ' container text-white'
        let card = 'card ' + classes.trans +' ' + classes.none
        let quote = 'card-text font-italic ' + classes.quote
        let quotesContent = ''
        let deathContent = ''
        if(this.state.quotes.length!==0){
            quotesContent = (
                this.state.quotes.map((element)=>{
                    return (
                        <div className="col-md-4 col-sm-12 pb-4">
                            <div className={card}>
                                <div className="card-body">
                                    <p className={quote}>{element.quote}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
        if(this.state.deaths.length!==0){
            deathContent = (
                this.state.deaths.map((element)=>{
                    return (
                        <div className="col-md-4 col-sm-12 pb-4">
                            <div className={card}>
                                <div className="card-body">
                                    <p className='card-text'>
                                        <ul>
                                            <li>
                                                <span className={classes.bold}>Death:</span> {element.death}
                                            </li>
                                            <li className='pt-3'>
                                            <span className={classes.bold}>Cause:</span> {element.cause}
                                            </li>
                                            <li className='pt-3'>
                                            <span className={classes.bold}>Last words:</span> <q className='font-italic'>{element.last_words}</q>
                                            </li>
                                            <li className='pt-3'>
                                            <span className={classes.bold}>Episode:</span> {element.episode}
                                            </li>
                                            <li className='pt-3'>
                                            <span className={classes.bold}>Season:</span> {element.season}
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
        if(this.state.loading==true){
            quotesContent = <Spinner/>
        }
        if(this.state.loading==true){
            deathContent = <Spinner/>
        }
        return (
            <React.Fragment>
                <div className={div}>
                    <div className='text-center pt-5'>
                        <h1>{this.props.match.params.name}</h1>
                    </div>
                    <div className={classes.p6}>
                        <p className={classes.title}>Quotes</p>
                        <div className="row">
                            {quotesContent}
                        </div>
                    </div>
                    <div className={classes.p6}>
                        <p className={classes.title}>Responsible Deaths: {this.state.count}</p>
                        <div className="row">
                            {deathContent}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Details;
