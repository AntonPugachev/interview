export interface Response {
  info: Info
  results: Result[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: null
}

export interface Result {
  id: number
  name: string
  status: Status
  species: Species
  type: string
  gender: Gender
  origin: Location
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export type Gender = 'Male' | 'Female' | 'unknown'

export interface Location {
  name: string
  url: string
}

export type Species = 'Human' | 'Alien'

export type Status = 'Alive' | 'unknown' | 'Dead'

export type PaginatorProps = {
  total: number
  page: number
  pageSize: number
  onChange: (page: number) => void
}
