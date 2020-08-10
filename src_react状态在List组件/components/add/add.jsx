import React , {Component} from 'react'
import {v4 as uuid} from 'uuid'

import './css/add.css'
class Add extends Component {

    myRef = React.createRef();

    submitHandel = (event) => {
        event.preventDefault();
        let {updateState} = this.props;
        let username = this.myRef.current.value;
        let content = this.textarea1.value;
        let id = uuid();
        let newUserComment = {id,username,content};
        if(username !== '' && content !== '') {
            updateState(newUserComment);
        }
        this.myRef.current.value = '';
        this.textarea1.value = '';
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
                            <textarea ref={textarea => this.textarea1 = textarea}></textarea>
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