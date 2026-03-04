/*eslint no-console: 0*/
/*eslint @typescript-eslint/no-unused-vars: 0*/
//===================================== Task 3.1====================================================
import { useState } from 'react'

interface IItem {
  id: 'single'
  name: string
}
interface IGroup {
  id: 'group'
  children: TTree[]
}
type TTree = IItem | IGroup

const Tree: TTree[] = [
  {
    id: 'group',
    children: [
      {
        id: 'single',
        name: 'Item 1',
      },
      {
        id: 'group',
        children: [],
      },
    ],
  },
]

const getAllItems = (tree: TTree[] = Tree): IItem[] => {
  //Todo: write code to get all items from tree
  return tree as unknown as IItem[]
}

export const Task3 = () => {
  const [state, setState] = useState<IItem[]>([])
  const onClickHandler = () => {
    setState(getAllItems())
  }
  return (
    <div className={'p-8'}>
      <button className={'bg-blue-400 rounded-md  p-2 text-white'} onClick={onClickHandler}>
        Get All Items
      </button>
      <pre className=" mt-8 text-sm">{JSON.stringify(state, null, 2)}</pre>
    </div>
  )
}
//===================================== Task 3.2 fix errors=========================================
enum TestEnum {
  A = 'A',
  B = 'B',
}

interface ITest2 {
  id: TestEnum
  name: string
}

const data: ITest2[] = [
  { id: 'A', name: 'a' },
  { id: 'B', name: 'b' },
]
console.log(data)
//===================================== Task 3.3 fix errors=========================================
type TTest3_1 = string[]
type TTest3_2 = number[]
type TTest3_3 = Record<string, string>[]

//todo: Write the type returned the array element

type ArrayElement<T> = string

const result1: ArrayElement<TTest3_1> = 'tests'
const result2: ArrayElement<TTest3_2> = 1
const result3: ArrayElement<TTest3_3> = { test: 'tests' }
console.log(result1, result2, result3)
