import * as variables from '../../../../globalVariables'

const initState = {
    character : ''
}
const reducer = (state=initState, action)=>{
    if(action.type === variables.SEARCH){
        return {
            character: action.name
        }
    }
    return state
}
export default reducer