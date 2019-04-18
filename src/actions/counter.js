import { ADD, MINUS, LOADING } from '../constants/counter'

export const add = () => {
  return {
    type: ADD
  }
}

export const minus = () => {
  return {
    type: MINUS
  }
}

export const showLoading = () => {
  return {
    type: LOADING,
    payload: true
  }
}

export const hideLoading = () => {
  return {
    type: LOADING,
    payload: false
  }
}


export function asyncAdd () {
  return dispatch => {
    dispatch(showLoading())
    setTimeout(() => {
      dispatch(hideLoading())
      dispatch(add())
    }, 2000)
  }
}