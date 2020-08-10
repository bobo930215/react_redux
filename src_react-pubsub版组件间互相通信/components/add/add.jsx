import React , {Component} from 'react'
import {v4 as uuid} from 'uuid'
import PubSub from 'pubsub-js'
import './css/add.css'
class Add extends Component {

    myRef = React.createRef();
    myRef1 = React.createRef();

    submitHandel = (event) =>{
        event.preventDefault();
        let username = this.myRef.current.value;
        let content = this.myRef1.current.value;
        let id = uuid();
        let newUserComment = {id,username,content};
        if(username !== '' && content !== '') {
            PubSub.publish('userListObj',newUserComment)
        }else {
            alert('请输入用户名或内容')
        }
        this.myRef.current.value = '';
        this.myRef1.current.value = '';
    }

    render() {
        return(
            <div className='addmoudle'>
                <form method='get' onSubmit={this.submitHandel}>
                    <ul>
                        <li>
                            <input type="text" placeholder='请输入用户名' ref={this.myRef}/>
                        </li>
                        <li>
                            <textarea ref={this.myRef1}></textarea>
                        </li>
                        <li>
                            <button>提交</button>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

export default Add