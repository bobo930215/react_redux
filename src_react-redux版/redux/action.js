//action 同步请求返回对象 异步请求返回函数
import {ADD_COMMENT,DELETE_COMMENT,INIT_COMMENT} from './action_types'
import {v4 as uuid} from "uuid";


export const addComment = (commentObj) => ({type:ADD_COMMENT,data:commentObj});

export const deleteComment = (id) => ({type:DELETE_COMMENT,data:id});

const initComment = (comments) => ({type:INIT_COMMENT,data:comments});
//异步action
export const getComment = () => {
    return dispatch=> {
        setTimeout(()=>{
            const comments =  [
                {id:uuid(),username:'TOM',content:'REDUX太难了'},
                {id:uuid(),username:'KOBE',content:'如果你永不畏惧'},
                {id:uuid(),username:'YAO',content:'努力不一定成功，但放弃一定失败'}
            ];
            dispatch(initComment(comments))
        },1000)
    }
}