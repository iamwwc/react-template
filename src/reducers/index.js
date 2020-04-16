import { combineReducers } from "redux";

const initialState = { count: 0}

function plus(state = initialState, action) {
  switch(action.type){
    case 'PLUS_COUNT':
      return {... state, count: ++ state.count }
    default:
      return state
  }
}

export default combineReducers({
  plus
})
