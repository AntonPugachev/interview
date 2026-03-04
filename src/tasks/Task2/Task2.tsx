import { useState } from 'react'

import { BUTTON_BASE, NAV_ITEM_BASE } from './utils/constants'

export const Task2 = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className=" w-full h-screen">
      <header className="p-4  border-b ">
        <h1 className="font-bold text-lg">Task: Aside + Main Layout</h1>
      </header>

      <div className="">
        <aside className={`bg-violet-200  ${isOpen ? 'w-75' : 'w-0'}`}>
          <div className="p-4 flex flex-col gap-1">
            <button className={BUTTON_BASE} onClick={() => setIsOpen(false)}>
              Close
            </button>
            <div className={NAV_ITEM_BASE}>Dashboard</div>
            <div className={NAV_ITEM_BASE}>Profile</div>
            <div className={NAV_ITEM_BASE}>Settings</div>
            <div className={NAV_ITEM_BASE}>Logout</div>
          </div>
        </aside>

        <main className={``}>
          <header className="p-4 bg-sky-200 h-16 ">
            {!isOpen && (
              <button className={`${BUTTON_BASE} mr-3`} onClick={() => setIsOpen(true)}>
                Open
              </button>
            )}
            Main Header
          </header>
          <div className="p-4 bg-emerald-50 ">
            <div className="h-screen">Main Content</div>
          </div>
          <footer className="p-4 bg-amber-200 h-16 ">Footer</footer>
        </main>
      </div>
    </div>
  )
}
