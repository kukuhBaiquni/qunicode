export const setDefaultToken = (request) => {
  const token = localStorage.getItem('token')
  request.headers.Authorization = `Bearer ${token}`
  return request
}

export const errorHandler = async (error) => error
