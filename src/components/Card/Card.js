import React from 'react'
import classes from './Card.css'
import {Link} from 'react-router-dom'
function Card(props) {
    let cn = classes.pt6
    let send = '/' + props.name
    return (
        <React.Fragment>
        <div>
            <div className={classes.flipcard}>
                <div className={classes.flipcardinner}>
                    <div className={classes.flipcardfront}>
                    <img src={props.img} alt='' height='100%' width='100%'/>
                    </div>
                    <div className={classes.flipcardback}>
                        <div className='text-center pt-3 border-bottom'><h5>{props.name}</h5></div>
                        <div className='pl-2 pt-3'>
                            <p><span className="font-weight-bold">Actor Name</span>: {props.portrayed}</p>
                            <p><span className="font-weight-bold">Nickname</span>: {props.nickname}</p>
                            <p><span className="font-weight-bold">Occupation</span>: {props.birthday}</p>
                            <p><span className="font-weight-bold">Status</span>: {props.status}</p>
                            <div className='text-center'><p className={cn}><Link to={send} className={classes.anchor}>More details</Link></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Card
