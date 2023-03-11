export type TPriceRange = '$' | '$$' | '$$$' | '$$$$'
export type TLangValue = { value: string[]; location: string }[]
export type TEstablishmentData = {
  title: { value: string; lang: string }[]
  category: {
    title: { name: string; lang: string }[]
    image: string
    id: string
  }
  specifications: {
    value: string[]
    lang: string
  }[]
  price: TPriceRange
  address: { value: string; lang: string }[]
  location: {
    type: 'Point'
    coordinates: number[]
  }
  highlights: { value: string[]; lang: string }[]
  contacts: { [x: string]: string }
  open: {
    value: {
      day: string
      opening: string
      closing: string
    }[]
    lang: string
  }[]
  status: string
  reason: null | string | number
  manager: { [x: string]: string } | null
  show: boolean
  index: number
  images: string[]
  mood: string[]
  menu: { name: string; preview: string }[]
  createdAt: string
  updatedAt: string
  id: string
}

export type TResponse = {
  models: TEstablishmentData[]
  totalCount: number
  specifications: { value: string[]; lang: string }[]
}
export type TDeleteSuccess = {
  acknowledged: boolean
  deletedCount: number
}
