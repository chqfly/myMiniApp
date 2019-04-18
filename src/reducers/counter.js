import { ADD, MINUS, LOADING } from '../constants/counter'

const INITIAL_STATE = {
  num: 0,
  loading: false
}

export default function counter (state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      }
    case LOADING: 
      return {
        ...state,
        loading: actions.payload
      }
    default:
      return state
  }
}