import axios from 'axios'
import { TResponse } from './types'
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDFjYmQ3MzYwYWMwZmY1N2UxNzMzOSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3ODE3OTUzMywiZXhwIjoxNjc4MjE1NTMzfQ.sP6aVxIxshEbNuvd22O1r1jWXPd-WR9EFVLwRFb39qU`
axios.defaults.baseURL = 'https://dev-api.radius.kitg.com.ua'
type TGetRequest = {
  models: TResponse[]
}

export const getEstablishment = async (): Promise<TResponse[]> => {
  const response = await axios.get(`api/v1/admin/establishments`)
  return response.data.models
}
