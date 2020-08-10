import React , {Component} from 'react'
import Title from '../title/title.jsx'
import Add from '../add/add.jsx'
import List from '../list/list.jsx'
class App extends Component {
    render() {
        return(
            <div className='wrapper'>
                <Title/>
                <Add/>
                <List/>
            </div>
        )
    }
}

export default App