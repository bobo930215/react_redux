import React , {Component} from 'react'
import './css/item.css'
class Item extends Component {

    clickHandle = () => {
        let {id,deleteState} = this.props;
        deleteState(id);
    }

    render() {
        let {username,content} = this.props;
        return(
            <li className='itemmoudle'>
                <h2>{username}说:</h2>
                <p>{content}</p>
                <a href="#1" onClick={this.clickHandle}>删除</a>
            </li>
        )
    }
}

export default Item