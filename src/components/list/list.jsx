import React , {Component} from 'react'

import Item from '../item/item.jsx'
import './css/list.css'
class List extends Component {

    deleteState = (id) => {
        let {deleteComment} = this.props;
        deleteComment(id);
    }



    render() {
        let {comment} = this.props;
        if(comment.length === 0) {
            return(
                <div className='listmoudle'>
                    <div className={comment.length === 0?'':'current'}>
                        <h1>当前暂无评论,请您输入评论</h1>
                    </div>
                </div>
            )
        }else {
            return(
                <div className='listmoudle'>
                    <ul>
                        {
                            comment.map((item)=>{
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