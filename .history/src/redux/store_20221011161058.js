import { combineReducers } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import thunk from 'redux-thunk'
import podcastReducer from '../feature/Podcast/PodcastSlice'
import { reducer } from './reducers'

export const store = combineReducers(reducer, composeWithDevTools(thunk))
