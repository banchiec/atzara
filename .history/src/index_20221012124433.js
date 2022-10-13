import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={so}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
)
