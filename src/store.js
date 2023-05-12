import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      {
        if (state.count === 0) return state;
        return { count: state.count - 1 };
      }
    default:
      return state;
  }
}
// requires implementing a middleware for side effects
const store = createStore(counterReducer, composeWithDevTools());

export default store;