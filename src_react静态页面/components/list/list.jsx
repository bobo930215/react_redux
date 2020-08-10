import React , {Component} from 'react'

import Item from '../item/item.jsx'
import './css/list.css'
class List extends Component {
    render() {
        return(
            <div className='listmoudle'>
                <div className='current'>
                    <h1>当前暂无评论,请您输入评论</h1>
                </div>
                <ul>
                    <Item/>
                </ul>
            </div>
        )
    }
}

export default List