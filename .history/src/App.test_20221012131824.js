import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from '@remix-run/router'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import { Provider } from 'react-redux'

const render = (component) => rltRender(<Provider store=)

test('renders route HomeScreen', () => {
	const history = createMemoryHistory('/')
	history.push('/')
	render(
		<Router history={history}>
			<HomeScreen />
		</Router>
	)
})
