import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import QuestionReducer from './redux/reducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    questionState: QuestionReducer
})
// Adding a middleware function:
const loggerMiddleware = (store)=>{
    return next => {
        return action => {
            return next(action)
        }
    }
}
const devtools = process.env.NODE_ENV ==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose
const store = createStore(rootReducer, devtools(applyMiddleware(loggerMiddleware, thunk)))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();