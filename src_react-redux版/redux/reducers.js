import {v4 as uuid} from 'uuid'

import {ADD_COMMENT,DELETE_COMMENT,INIT_COMMENT} from './action_types'


let commentArr = [];

export const commentReducer = (state=commentArr,action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data,...state]
        case DELETE_COMMENT:
            let newComment = state.filter((item) => {
                return item.id !== action.data
            })
            return newComment
        case INIT_COMMENT:
            return action.data
        default:
            return state
    }
}