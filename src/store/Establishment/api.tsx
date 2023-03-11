import axios from 'axios'
import { TResponse } from './types'
import { TDeleteSuccess } from './types'
axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDFjYmQ3MzYwYWMwZmY1N2UxNzMzOSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3ODUyMDQyNSwiZXhwIjoxNjc4NTU2NDI1fQ.5mSwSsfXAbw17rkg5IarKTHf9qdU7gQxx28BB021Ex8`
axios.defaults.baseURL = 'https://dev-api.radius.kitg.com.ua'

export const getEstablishment = async (data: {
  limit: string
  page: number
}): Promise<TResponse> => {
  const response = await axios.get(`api/v1/admin/establishments`, {
    params: data,
  })

  return response.data
}
export const deleteEstablishment = async (id: string) => {
  const response = await axios.delete<TDeleteSuccess>(
    `api/v1/admin/establishments/${id}`,
  )
  return response.data
}
