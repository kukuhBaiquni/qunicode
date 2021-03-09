import { useSelector, useDispatch } from 'react-redux'
import { Fragment } from 'react'
import { increment, decrement } from 'Lib/Redux/Slice/counter'

function Dashboard() {
  const { number } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <Fragment>
      <button type='button' onClick={() => dispatch(increment('add'))}>Up</button>
      <div>{number}</div>
      <button type='button' onClick={() => dispatch(decrement('sub'))}>Down</button>
    </Fragment>
  )
}

export default Dashboard
