import React , {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './css/add.css'
class Add extends Component {

    myRef1 = React.createRef()
    myRef2 = React.createRef()

    submitHandel = (event)=>{
        event.preventDefault()
        console.log(this)
        let username = this.myRef1.current.value
        let content = this.myRef2.current.value
        let data = {id:uuid(),username,content}
        let {updateState} = this.props
        updateState(data)
    }

    render() {
        return(
            <div className="submit">
                <form method="post" onSubmit={this.submitHandel}>
                    <div className="submit_top">
                        <label>用户名:</label>
                        <input type="text" name="username" ref={this.myRef1}/>
                    </div>
                    <div className="submit_bottom">
                        <label>评论内容:</label>
                        <textarea name="comment" ref={this.myRef2}></textarea>
                    </div>
                    <button>提交</button>
                </form>
            </div>
        )
    }
}
export default Add