import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENT} from './action_types'
import {v4 as uuid} from "uuid";

export const addComment = (commentObj) => ({type:ADD_COMMENT,data:commentObj});

export const deleteComment = (id) => ({type:DELETE_COMMENT,data:id});

export const receiveComment = (initComment) => ({type: RECEIVE_COMMENT,data:initComment});

export const getComment = () => {
    return dispatch => {
        setTimeout(()=>{
            const initComment = [
                {id:uuid(),username:'TOM',content:'REACT太难了'},
                {id:uuid(),username:'KOBE',content:'如果你永不畏惧'},
                {id:uuid(),username:'YAO',content:'努力不一定成功，但放弃一定失败'}
            ];
            dispatch(receiveComment(initComment))
        },1000);
    }
}