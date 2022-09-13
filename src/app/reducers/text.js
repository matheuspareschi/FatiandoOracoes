import { Types } from '../actions/text'

const INITIAL_STATE = {
    ordenedTextPronouns: [],
    ordenedText: [],
    text: []
}

export default function text(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD_ORDENED_TEXT_PRONOUNS:
            return {
                ...state,
                    ordenedTextPronouns: [ action.ordenedTextPronouns]
            };
        
        case Types.ADD_ORDENED_TEXT:
            return {
                ...state,
                ordenedText: [ action.ordenedText ]
            };
        
        case Types.ADD_TEXT:
            return {
                ...state,
                text: [ action.text ]
            };
        case Types.EREASEALL_TEXT:
            return {
                ...state,
                ordenedTextPronouns: [],
                ordenedText: [],
                text: []
            }
        default:
               return state;
        }
        
}
