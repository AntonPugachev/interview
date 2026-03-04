import { Approach } from './utils/Approach'
import { TaskLayout } from './utils/TaskLayout'
// import styles from './CenteringTask.module.css'
export const Task1 = () => (
  <TaskLayout>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Approach 1 — Flexbox */}
      <Approach number={1} title="Flexbox" hint="display: flex">
        <div className={''}>
          <div className={``}>centered?</div>
        </div>
      </Approach>

      {/* Approach 2 — CSS Grid */}
      <Approach number={2} title="CSS Grid" hint="display: grid">
        <div className={``}>
          <div className={``}>centered?</div>
        </div>
      </Approach>

      {/* Approach 3 — Absolute + Transform */}
      <Approach number={3} title="Absolute + Transform" hint="position: absolute">
        <div className={``}>
          <div className={``}>centered?</div>
        </div>
      </Approach>

      {/* Approach 4 — Margin Auto */}
      <Approach number={4} title="Margin Auto" hint="margin: auto">
        <div className={``}>
          <div className={``}>centered?</div>
        </div>
      </Approach>

      {/* Approach 5 — Bonus */}
      <Approach number={5} title="Bonus: your choice" hint="?">
        <div className={``}>
          <div className={``}>centered?</div>
        </div>
      </Approach>
    </div>
  </TaskLayout>
)
