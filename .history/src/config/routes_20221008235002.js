import HomePage from '../pages/HomeScreen'
import * as PATHS from '../utils/paths'

const routes = (props) => {
	return [
		{
			path: PATHS.HOMEPAGE,
			element: <HomePage {...props} />,
		},
		{
			path: PATHS.DETAILPOSTCAST,
			element: <
		}
	]
}

export default routes
