import { getPodcastList } from '../reducers/PodcastListReducer'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAxios from ''

const mockStore = createMockStore([thunk])

describe('thunk test', () => {
	it('should handle fetch podcast list success', () => {})
	mockAxios.get.mockImplementationOnce(() => {
		Promise.resolve({ data: [{ id: 1, name: 'test' }] })
	})
	const store = mockStore()
	store.dispatch(getPodcastList())
	const actions = store.getActions()
	console.log(actions)
})
