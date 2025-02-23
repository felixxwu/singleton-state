import React, { useEffect, useState } from 'react'

export function singletonState<T>(initialState: T) {
  // keep a set of subscribers in this scope, each piece of state will have a separate set
  const subscribers = new Set<(value: React.SetStateAction<T>) => void>()
  let localValue = initialState

  // return the hook
  return () => {
    const [value, setValue] = useState(localValue)

    // on mount add the subscriber to the set
    useEffect(() => {
      subscribers.add(setValue)
      return () => {
        subscribers.delete(setValue)
      }
    }, [])

    // when the value changes, update localValue and call setValue for all subscribers
    const setValues = (newValue: React.SetStateAction<T>) => {
      if (typeof newValue === 'function') {
        localValue = (newValue as (value: T) => T)(localValue)
      } else {
        localValue = newValue
      }

      for (const subscriber of subscribers) {
        subscriber(newValue)
      }
    }

    return [value, setValues] as const
  }
}
