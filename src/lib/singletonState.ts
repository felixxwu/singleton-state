import React, { useEffect, useState } from 'react'

export function singletonState<T>(initialState: T) {
  // keep a set of subscribers in this scope, each piece of state will have a separate set
  const subscribers = new Set<(value: React.SetStateAction<T>) => void>()

  // return the hook
  return () => {
    const [value, setValue] = useState(initialState)

    // on mount add the subscriber to the set
    useEffect(() => {
      subscribers.add(setValue)
      return () => {
        subscribers.delete(setValue)
      }
    }, [])

    // when the value changes, call the setValue for all subscribers
    const setValues = (newValue: React.SetStateAction<T>) => {
      for (const subscriber of subscribers) {
        subscriber(newValue)
      }
    }

    return [value, setValues] as const
  }
}
