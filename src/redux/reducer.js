import * as variables from '../globalVariables'

const initState = {
    questions:[]
}
const reducer = (state=initState, action)=>{
    if(action.type === variables.SAVEQUESTIONS){
        return {
            questions: action.questions
        }
    }
    return state
}
export default reducer