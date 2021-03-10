import { increment, decrement } from '../Slice/counter'

export const counterActionIncrement = (act) => async (dispatch) => {
  dispatch(increment(act))
}

export const counterActionDecrement = (act) => async (dispatch) => {
  dispatch(decrement(act))
}
