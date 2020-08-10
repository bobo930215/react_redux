import React , {Component} from 'react'
import Title from '../title/title.jsx'
import Add from '../add/add.jsx'
import List from '../list/list.jsx'
class App extends Component {

    render() {
        let {getState,dispatch} = this.props.store;
        return(
            <div className='wrapper'>
                <Title/>
                <Add dispatch={dispatch} />
                <List getState={getState} dispatch={dispatch}/>
            </div>
        )
    }
}

export default App