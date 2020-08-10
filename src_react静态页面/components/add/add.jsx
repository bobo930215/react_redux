import React , {Component} from 'react'
import './css/add.css'
class Add extends Component {
    render() {
        return(
            <div className='addmoudle'>
                <form method='get'>
                    <ul>
                        <li>
                            <input type="text" placeholder='请输入用户名'/>
                        </li>
                        <li>
                            <textarea></textarea>
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