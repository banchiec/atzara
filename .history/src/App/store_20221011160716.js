import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import { createStore } from 'redux'
import podcastReducer from '../feature/Podcast/PodcastSlice'
import { reducer } from '../redux/reducers'

export const store = createStore(reducer,composeWithDevTools)
