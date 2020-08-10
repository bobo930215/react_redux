import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENT} from './action_types'

const commentArr = [];

export const commentReducer = (state = commentArr , action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data,...state]
        case DELETE_COMMENT:
            return state.filter((item) => {
                return item.id !== action.data
            })
        case RECEIVE_COMMENT:
            return action.data
        default:
            return state
    }
}