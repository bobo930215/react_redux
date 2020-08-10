import React , {Component} from 'react'
import './css/item.css'
class Item extends Component {

    clickHandel = () => {
        let {id,deleteState} = this.props
        deleteState(id)
    }

    render() {
        // console.log(this.props)
        let {username,content} = this.props
        return(
            <li>
                <h2>{username}说:</h2>
                <p>{content}</p>
                <a href="#1" onClick={this.clickHandel}>删除</a>
            </li>

        )
    }
}
export default Item