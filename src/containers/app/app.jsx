import React , {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Title from '../../components/title/title.jsx'
import Add from '../../components/add/add.jsx'
import List from '../../components/list/list.jsx'
import {addComment,deleteComment,getComment} from '../../redux/actions'
class App extends Component {

    static propTypes = {
        comment : PropTypes.array.isRequired,
        addComment : PropTypes.func.isRequired,
        deleteComment : PropTypes.func.isRequired,
        getComment : PropTypes.func.isRequired
    }

    componentDidMount() {
        let {getComment} = this.props;
        getComment();
    }

    render() {
        let {comment, addComment , deleteComment} = this.props;
        return(
            <div className='wrapper'>
                <Title/>
                <Add addComment={addComment}/>
                <List comment={comment} deleteComment={deleteComment} getComment={getComment}/>
            </div>
        )
    }
}

export default connect(
    state => ({comment:state}),
    {addComment,deleteComment,getComment}
)(App)