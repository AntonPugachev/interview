import { type ReactElement } from 'react'

import { injectBaseClasses } from './injectBaseClasses'

type ApproachProps = {
  number: number
  title: string
  hint: string
  children: ReactElement
}

export const Approach = ({ number, title, hint, children }: ApproachProps) => (
  <div className="flex flex-col gap-3 p-5 bg-white rounded-xl shadow-sm border border-slate-200">
    <div className="flex items-start justify-between gap-2">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
          Approach {number}
        </span>
        <h3 className="text-base font-semibold text-slate-800 mt-0.5">{title}</h3>
      </div>
      <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded font-mono whitespace-nowrap">
        {hint}
      </span>
    </div>

    {injectBaseClasses(children)}
  </div>
)
