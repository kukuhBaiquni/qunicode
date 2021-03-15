import axios from 'axios'
import { setDefaultToken, errorHandler } from './interceptor'

const __REQ = axios.create({
  baseURL: 'https://areon-api.doterb.com/api/v1',
})

__REQ.interceptors.request.use(setDefaultToken)
__REQ.interceptors.response.use((res) => res, errorHandler)

export default __REQ
