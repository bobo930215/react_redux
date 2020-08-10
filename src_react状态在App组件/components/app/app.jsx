import React ,{Component} from 'react'
import {v4 as uuid} from 'uuid'

import Title from '../title/title.jsx'
import Add from '../add/add.jsx'
import List from '../list/list.jsx'
class App extends Component{
    state = {
        userComment:[
            {id:uuid(),username:'TOM',content:'ReactJS太难了'},
            {id:uuid(),username:'KOBE',content:'如果你永不畏惧'},
            {id:uuid(),username:'YAO',content:'努力不一定成功,但放弃一定失败'}
        ]
    }

    updateState = (data) => {
        let {userComment} = this.state
        userComment.unshift(data)
        this.setState({userComment})
    }

    deleteState = (id) => {
        let {userComment} = this.state
        let newComment = userComment.filter((item)=>{
            return item.id !== id
        })
        this.setState({userComment:newComment})
        console.log(id)
    }

    render() {
        let {userComment} = this.state
        return(
            <div id="wrapper">
                {/*Title组件*/}
                <div className="header">
                    <Title/>
                </div>

                <div className="content">
                    {/*Add组件*/}
                    <Add updateState={this.updateState}/>
                    {/*List组件*/}
                    <List userComment={userComment} deleteState={this.deleteState}/>

                </div>

            </div>
        )
    }
}

export default App