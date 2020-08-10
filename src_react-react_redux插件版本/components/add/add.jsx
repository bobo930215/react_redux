import React , {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './css/add.css'
class Add extends Component {

    myRef1 = React.createRef();
    myRef2 = React.createRef();

    submitHandle = (event) => {
        event.preventDefault();
        let {addComment} = this.props;
        let username = this.myRef1.current.value;
        let content = this.myRef2.current.value;
        let id = uuid();
        let commentObj = {id,username,content};
        if(username.trim() === '' || content.trim() === '') {
            alert('请输入正确的用户名和内容')
        }else {
            addComment(commentObj);
        }
        this.myRef1.current.value = '';
        this.myRef2.current.value = '';
    }

    render() {
        return(
            <div className='addmoudle'>
                <form method='get' onSubmit={this.submitHandle}>
                    <ul>
                        <li>
                            <input type="text" placeholder='请输入用户名' ref={this.myRef1}/>
                        </li>
                        <li>
                            <textarea ref={this.myRef2}></textarea>
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