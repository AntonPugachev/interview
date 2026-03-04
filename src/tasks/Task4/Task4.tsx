import { useState } from 'react'

import { characters } from './characters.mock'
import { columns } from './utils/columns'
import { Paginator } from './utils/Paginator'

/**
 * Task: Fetch and display Rick & Morty characters from the API.
 *
 * TODO:
 *  1. Replace `data = characters` with a real fetch from:
 *     https://rickandmortyapi.com/api/character?page=${page}
 *  2. Use the `Response` and `Result` types already defined in ./types.ts — no changes needed there.
 *  3. Wire up the Paginator using the `info.count` and `info.pages` from the API response.
 *  4. Do NOT change the JSX/HTML markup below.
 */
export const Task4 = () => {
  const [page, setPage] = useState(1)
  const data = characters

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Rick & Morty Characters</h1>

      <Paginator total={data.length} page={page} pageSize={20} onChange={setPage} />

      <table className="w-full border-collapse border border-slate-200 text-sm">
        <thead>
          <tr className="bg-slate-100 text-slate-600">
            {columns.map((col) => (
              <th key={col.label} className="border border-slate-200 px-3 py-1.5 text-left">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((char) => (
            <tr key={char.id} className="hover:bg-slate-50">
              {columns.map((col) => (
                <td key={col.label} className="border border-slate-200 px-3 py-1.5">
                  {col.render(char)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
