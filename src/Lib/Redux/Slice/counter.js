import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter', // Nama property state yang akan digunakan untuk mengakses data via useSelector
  initialState: {
    number: 0,
    act: '',
  },
  reducers: {
    increment: (state, action) => ({
      number: state.number + 1,
      act: action.payload,
    }),
    decrement: (state, action) => ({
      number: state.number - 1,
      act: action.payload,
    }),
  },
})

export const {
  increment,
  decrement,
} = counterSlice.actions

export default counterSlice.reducer
