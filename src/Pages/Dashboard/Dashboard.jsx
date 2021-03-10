import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from 'react'
import {
  counterActionIncrement, counterActionDecrement,
} from 'Lib/Redux/Actions/counter'

function Dashboard() {
  const { number } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <Fragment>
      <button type='button' onClick={() => dispatch(counterActionIncrement('add'))}>Up</button>
      <div>{number}</div>
      <button type='button' onClick={() => dispatch(counterActionDecrement('sub'))}>Down</button>
    </Fragment>
  )
}

export default Dashboard
