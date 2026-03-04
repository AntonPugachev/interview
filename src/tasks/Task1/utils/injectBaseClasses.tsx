import { Children, cloneElement, type ReactElement } from 'react'

import { CHILD_BASE, PARENT_BASE } from './constants'

export const injectBaseClasses = (parent: ReactElement) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const p = parent as ReactElement<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c = Children.only(p.props.children) as ReactElement<any>

  return cloneElement(p, {
    className: `${PARENT_BASE} ${p.props.className}`,
    children: cloneElement(c, { className: `${CHILD_BASE} ${c.props.className}` }),
  })
}
