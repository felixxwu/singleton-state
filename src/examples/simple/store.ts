import { computed, singletonState } from 'singleton-state-hook'

export const Count = singletonState(0)
export const SomeOtherState = singletonState('Does not re-render when Count changes')
export const DoubleCount = computed(Count, count => count * 2)
