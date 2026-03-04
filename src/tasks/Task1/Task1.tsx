/**
 * Task: Center a child element inside its parent using at least 4 different CSS approaches.
 *
 * TODO:
 *  Add Tailwind classes inside the template literals `` to center the child in each approach.
 *  - Approach 1: Flexbox
 *  - Approach 2: CSS Grid
 *  - Approach 3: Absolute
 *  - Approach 4: Margin Auto
 *  - Approach 5: Bonus
 *
 *  Do NOT change the markup structure.
 *  Optionally: use ./CenteringTask.module.css instead of Tailwind classes.
 */
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

      {/* Approach 3 — Absolute  */}
      <Approach number={3} title="Absolute " hint="position: absolute">
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
