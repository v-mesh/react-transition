import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../css/style.css'

if (process.env.NODE_ENV !== 'production') {
  require('../index.html')
}

ReactDOM.render(<App />, document.querySelector('#app'))
