import { type Result } from '../types'
import { formatDate } from './formatDate'

export const columns: { label: string; render: (c: Result) => React.ReactNode }[] = [
  { label: 'Name',    render: (c) => c.name },
  { label: 'Species', render: (c) => c.species },
  { label: 'Gender',  render: (c) => c.gender },
  { label: 'Created', render: (c) => formatDate(c.created) },
]
