# Singleton State

A 1kB alternative to React Context with improved performance and ergonomics.

## Define your state

Every piece of state is a hook. Create state using `singletonState`.

```ts
import { singletonState } from 'singletonstate' (WIP)

export const useCount = singletonState(0)
```

## Use your state

Just import and use the hook in your components, no providers needed.

```ts
function Display() {
  const [count] = useCount()
  return <h1>{count}</h1>
}

function Increment() {
  const [count, setCount] = useCount()
  return <button onClick={() => setCount(count + 1)}>Increment</button>
}
```

## Performance benefits?

React Context causes all consumers of the context to re-render every time the value changes. Commonly there will be multiple values in the same context like so:

```ts
export const Context = createContext<{
  count: number
  setCount: Dispatch<SetStateAction<number>>
  someOtherState: string
}>(null!)
```

This will mean that any subscribers of `someOtherState` will get a re-render every time `count` changes, unless we wrap our app with a new provider for every piece of state.

<img src="https://raw.githubusercontent.com/felixxwu/singleton-state/refs/heads/main/assets/context.gif" width="400" />

With Singleton State, each piece of state will be separated into its own hook, so there will be no unnecessary re-renders.

<img src="https://raw.githubusercontent.com/felixxwu/singleton-state/main/assets/singletonState.gif" width="400" />

Play with an interactive demo here: https://singletonstate.web.app/

## How does it work under the hood?

The entire library is only about 30 lines long:

```ts
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
```

- each instance of `singletonState` stores a list of subscribers (i.e. components that consume the hook)
- each subscriber will be given their own `value` to react to using the standard React `useState` hook
- whenever a subscriber uses `setValue`, all subscribers are kept in sync through the subscription list

In effect, each consumer of the state has their own `useState` created by the hook. Then, outside of the standard React lifecycle, all states are being synced whenever the values changes.
