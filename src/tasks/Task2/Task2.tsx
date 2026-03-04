export const Task2 = () => {
  return (
    <div className=" w-full h-screen">
      <header className="p-4  border-b ">
        <h1 className="font-bold text-lg">Task: Aside + Main Layout</h1>
      </header>
      <div className="">
        <aside className={`bg-violet-200 w-75`}>Aside</aside>
        <main className={``}>
          <header className="p-4 bg-sky-200 h-16 ">Main Header</header>
          <div className="p-4 bg-emerald-50 ">
            <div className="h-screen">Main Content</div>
          </div>
          <footer className="p-4 bg-amber-200 h-16 ">Footer</footer>
        </main>
      </div>
    </div>
  )
}
