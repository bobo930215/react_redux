import React , {Component} from 'react'
import Title from '../title/title.jsx'
import Add from '../add/add.jsx'
import List from '../list/list.jsx'
class App extends Component {

    state = {
        newUserComment : {}
    }

    updateState = (commentObj) => {
        let {newUserComment} = this.state;
        this.setState({newUserComment:commentObj});
    }

    render() {
        return(
            <div className='wrapper'>
                <div><Title/></div>
                <div><Add updateState={this.updateState}/></div>
                <div><List state={this.state}/></div>
            </div>
        )
    }
}

export default App