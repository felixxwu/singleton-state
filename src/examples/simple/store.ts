import { computed, singletonState } from 'singleton-state-hook'

export const Count = singletonState(0)
export const SomeOtherState = singletonState('')
export const DoubleCount = computed({ Count }, ({ Count }) => Count * 2)
