import HomePage from '../pages/HomeScreen'
import * from '../utils/pat'
import * as PATHS from '../utils/paths'

const routes = () => {
	return [
		{
			path: PATHS.HOMEPAGE,
			element: <HomePage />,
		},
		{
			path: PATHS.DETAILPOSTCAST,
			element: <HomePage />,
		},
	]
}

export default routes
