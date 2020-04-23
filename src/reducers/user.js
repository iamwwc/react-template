const initialState = {
  staffs:{},
  consumers:{}
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'SET_STAFF':{
      return {
        ...state,
        staffs: action.data
      }
    }
    case 'SET_CONSUMER':{
      return {
        ...state,
        consumers: action.data
      }
    }
    default:{
      return state
    }
  }
}