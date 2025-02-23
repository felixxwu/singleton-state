import { singletonState } from 'singleton-state-hook'

export const useCount = singletonState(0)
export const useSomeOtherState = singletonState('Does not re-render when count changes')
