import * as variables from '../../../../globalVariables';

export const searchCharacter = (name)=>{
    return{
        type: variables.SEARCH,
        name: name
    }
}