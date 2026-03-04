import { type ReactNode } from 'react'

type TaskLayoutProps = {
  children: ReactNode
}

export const TaskLayout = ({ children }: TaskLayoutProps) => (
  <div className="min-h-screen bg-slate-50 p-8">
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Task: Center a Container</h1>
        <p className="mt-2 text-slate-500">
          Center the <code className="bg-slate-200 px-1 rounded text-sm">.child</code> element
          inside <code className="bg-slate-200 px-1 rounded text-sm">.parent</code> using at
          least <strong>4 different approaches</strong>.
        </p>
      </header>

      {children}
    </div>
  </div>
)
