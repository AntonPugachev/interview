import { type PaginatorProps } from '../types'

export const Paginator = ({ total, page, pageSize, onChange }: PaginatorProps) => (
  <div className="flex items-center gap-3 mb-3 text-sm text-slate-500">
    <button disabled={page === 1} onClick={() => onChange(page - 1)} className="disabled:opacity-40">← Prev</button>
    <span>Page {page} of {Math.ceil(total / pageSize)}</span>
    <button disabled={page === Math.ceil(total / pageSize)} onClick={() => onChange(page + 1)} className="disabled:opacity-40">Next →</button>
  </div>
)
