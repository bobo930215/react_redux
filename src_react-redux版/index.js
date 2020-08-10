import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app/app.jsx'
import store from './redux/store'
let {subscribe} = store;

function render() {
    ReactDOM.render(<App store={store}/>,document.querySelector('#root'))
}
render()
subscribe(render)