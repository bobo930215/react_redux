import React , {Component} from 'react'
import './css/item.css'
class Item extends Component {
    render() {
        return(
            <li className='itemmoudle'>
                <h2>xxx说:</h2>
                <p>xxxxx</p>
                <a href="#1">删除</a>
            </li>
        )
    }
}

export default Item