import { useSelector, useDispatch } from 'react-redux'
import { Fragment, useEffect } from 'react'
import {
  counterActionIncrement, counterActionDecrement,
} from 'Lib/Redux/Actions/counter'
import REQUEST from 'Lib/Axios/request.example'

function Dashboard() {
  const { number } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    REQUEST.get('/business_talks')
  }, [])

  return (
    <Fragment>
      <button type='button' onClick={() => dispatch(counterActionIncrement('add'))}>Up</button>
      <div>{number}</div>
      <button type='button' onClick={() => dispatch(counterActionDecrement('sub'))}>Down</button>
    </Fragment>
  )
}

export default Dashboard
