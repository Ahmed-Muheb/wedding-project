import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useWishes() {
  const [wishes, setWishes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchWishes = useCallback(async () => {
    setLoading(true)
    setError(null)

    const { data, error: fetchError } = await supabase
      .from('wedding_wishes')
      .select('id, name, attendance, message, signature, created_at')
      .order('created_at', { ascending: false })

    if (fetchError) {
      setError(fetchError.message)
    } else {
      setWishes(data ?? [])
    }

    setLoading(false)
  }, [])

  const submitWish = useCallback(
    async ({ name, attendance, message, signature }) => {
      setError(null)

      const { data, error: insertError } = await supabase
        .from('wedding_wishes')
        .insert([
          {
            name: name.trim(),
            attendance,
            message: message.trim(),
            signature: signature || null,
          },
        ])
        .select('id, name, attendance, message, signature, created_at')
        .single()

      if (insertError) {
        setError(insertError.message)
        return { success: false }
      }

      setWishes((prev) => [data, ...prev])
      return { success: true }
    },
    []
  )

  useEffect(() => {
    fetchWishes()
  }, [fetchWishes])

  return { wishes, loading, error, submitWish, refetch: fetchWishes }
}
