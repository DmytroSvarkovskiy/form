export type TPriceRange = '$' | '$$' | '$$$' | '$$$$'

export type TResponse = {
  title: string
  category: {
    title: string
    image: string
    id: string
  }
  specifications: string[]
  price: TPriceRange
  address: string
  location: {
    coordinates: number[]
    type: 'Point'
  }
  images: string[]
  mood: string[]
  menu: { name: string; preview: string }[]
  highlights: string[]
  open: {
    day: string
    opening: string
    closing: string
  }[]
  published: boolean
  createdAt: string
  updatedAt: string
  status: string
  manager: { [x: string]: string }
  index: number
  id: string
}
export type TGetEstablishmentsByIdResponse = {
  models: TResponse[]
  totalCount: number
  specifications: string[]
}
