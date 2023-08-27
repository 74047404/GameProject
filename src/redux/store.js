// store
import { createStore } from 'redux';
import PlayerReducer from './reducers';

const store = createStore(PlayerReducer);

export default store;
