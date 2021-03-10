import axios from 'axios'
import { setDefaultToken, errorHandler } from './interceptor'

const REQUEST = axios.create({
  baseURL: 'https://areon-api.doterb.com/api/v1',
})

REQUEST.interceptors.request.use(setDefaultToken)
REQUEST.interceptors.response.use((res) => res, errorHandler)

export default REQUEST
