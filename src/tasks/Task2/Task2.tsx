/**
 * Task: Implement a responsive aside + main layout with open/close toggle.
 *
 * TODO:
 *  Your task is to fix the layout so that:
 *  1. The <aside> is exactly 300px wide
 *  2. The <main> always fills the remaining horizontal space
 *  3. Inside <main>: <header> and <footer> are fixed at 64px, the content area in between scrolls.
 *  5. Do NOT change the markup structure.
 */
export const Task2 = () => {
  return (
    <div className="w-full h-screen">
      <header className="p-4 border-b ">
        <h1>Task: Aside + Main Layout</h1>
      </header>
      <div className="">
        <aside className={`bg-violet-200 w-75`}>Aside</aside>
        <main className={'flex flex-col'}>
          <header className="p-4 bg-sky-200 h-16 ">Main Header</header>
          <div className="p-4 bg-emerald-50">
            <div className="h-screen ">Main Content</div>
          </div>
          <footer className="p-4 bg-amber-200 h-16 ">Footer</footer>
        </main>
      </div>
    </div>
  )
}
