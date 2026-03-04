import { useState, useEffect, useEffectEvent } from 'react'
import type { Response } from './types'

export const useGetData = (page: number) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Response | null>(null)
  let abortController = new AbortController()
  const fn = useEffectEvent(async () => {
    if (loading) return
    setLoading(true)
    try {
      abortController.abort()
      abortController = new AbortController()
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`, {
        signal: abortController.signal,
      })
      if (!response.ok) throw new Error('Network response was not ok')
      const json: Response = await response.json()
      setData(json)
    } catch {
      console.log('error')
    } finally {
      setLoading(false)
    }
  })
  useEffect(() => {
    fn()
  }, [page])

  return {
    loading,
    data,
  }
}
