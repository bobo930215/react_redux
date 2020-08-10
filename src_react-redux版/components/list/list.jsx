import React , {Component} from 'react'

import Item from '../item/item.jsx'
import {addComment,deleteComment,getComment} from '../../redux/action'
import './css/list.css'
class List extends Component {

    deleteState = (id) => {
        let {dispatch} = this.props;
        dispatch(deleteComment(id));
    }

    componentDidMount() {
        let {dispatch} = this.props;
        dispatch(getComment())
    }

    render() {
        let {getState} = this.props;
        let userComment = getState();
        if(userComment.length === 0) {
            return(
                <div className='listmoudle'>
                    <div className={userComment.length===0?'':'current'}>
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
                                return <Item key ={item.id} {...item} deleteState={this.deleteState}/>
                            })
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default List