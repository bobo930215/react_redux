import React , {Component} from 'react'
import Item from '../item/item.jsx'
import './css/list.css'
class List extends Component {

    render() {
        // console.log(this.props)
        let {userComment,deleteState} = this.props
        if(userComment.length === 0) {
            return(
                <div className='com_list'>
                    <div className={userComment.length===0?'contain':"contain current"}>
                        <h1>当前评论区暂无内容</h1>
                    </div>
                </div>
            )
        }else {
            return(
                <div className='com_list'>
                    <div className ="contain_list">
                        <h2>评论回复:</h2>
                        <ul>
                            {
                                userComment.map((item)=>{
                                    return <Item key={item.id} {...item} deleteState={deleteState}/>
                                })
                            }
                        </ul>
                    </div>
                </div>
            )
        }

    }
}
export default List