import React , {Component} from 'react'
import {v4 as uuid} from 'uuid'
import PubSub from 'pubsub-js'

import Item from '../item/item.jsx'
import './css/list.css'
class List extends Component {

    state = {
        userComment : [
            {id:uuid(),username:'TOM',content:'REACT太难了'},
            {id:uuid(),username:'KOBE',content:'如果你永不畏惧'},
            {id:uuid(),username:'YAO',content:'努力不一定成功，但放弃一定失败'}
        ]
    }

    deleteState = (id) =>{
        let {userComment} = this.state;
        let newComment = userComment.filter((item)=>{
            return item.id !== id;
        })
        this.setState({
            userComment:newComment
        })
    }

    componentDidMount() {
        PubSub.subscribe('userListObj',(msg,commentObj)=>{
            let {userComment} = this.state;
            userComment.unshift(commentObj);
            this.setState({userComment});
        })
    }

    render() {
        let {userComment} = this.state;
        if(userComment.length === 0) {
            return(
                <div className='listmoudle'>
                    <div className={userComment.length == 0?'':'current'}>
                        <h1>当前暂无评论,请您输入评论</h1>
                    </div>
                </div>
            )
        }else {
            return(
                <div className='listmoudle'>
                    <ul>
                        {
                            userComment.map((item)=>{
                                return <Item key={item.id} {...item} deleteState={this.deleteState}/>
                            })
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default List