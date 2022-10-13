import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './App/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Fragment>
		<App />
	</Fragment>
)
