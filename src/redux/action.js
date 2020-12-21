import * as variables from '../globalVariables';

export const saveQuestions = (questions)=>{
    return{
        type: variables.SAVEQUESTIONS,
        questions : questions
    }
}