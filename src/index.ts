import { enableES5 } from 'immer'
export * from 'redux'
export {
  default as createNextState,
  current,
  freeze,
  original,
  isDraft,
} from 'immer'
export type { Draft } from 'immer'

export { createSelector } from 'reselect'
export type {
  Selector,
  OutputParametricSelector,
  OutputSelector,
  ParametricSelector,
} from 'reselect'
export { createDraftSafeSelector } from './createDraftSafeSelector'
export type { ThunkAction, ThunkDispatch } from 'redux-thunk'

// We deliberately enable Immer's ES5 support, on the grounds that
// we assume RTK will be used with React Native and other Proxy-less
// environments.  In addition, that's how Immer 4 behaved, and since
// we want to ship this in an RTK minor, we should keep the same behavior.
enableES5()

export { configureStore } from './configureStore'
export type {
  ConfigureEnhancersCallback,
  ConfigureStoreOptions,
  EnhancedStore,
} from './configureStore'
export { createAction, getType } from './createAction'
export type {
  PayloadAction,
  PayloadActionCreator,
  ActionCreatorWithNonInferrablePayload,
  ActionCreatorWithOptionalPayload,
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  ActionCreatorWithPreparedPayload,
  PrepareAction,
} from './createAction'
export { createReducer } from './createReducer'
export type { Actions, CaseReducer, CaseReducers } from './createReducer'
export { createSlice } from './createSlice'
export type {
  CreateSliceOptions,
  Slice,
  CaseReducerActions,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
  CaseReducerWithPrepare,
  SliceActionCreator,
} from './createSlice'
export {
  createImmutableStateInvariantMiddleware,
  isImmutableDefault,
} from './immutableStateInvariantMiddleware'
export type { ImmutableStateInvariantMiddlewareOptions } from './immutableStateInvariantMiddleware'
export {
  createSerializableStateInvariantMiddleware,
  findNonSerializableValue,
  isPlain,
} from './serializableStateInvariantMiddleware'
export type { SerializableStateInvariantMiddlewareOptions } from './serializableStateInvariantMiddleware'
export { getDefaultMiddleware } from './getDefaultMiddleware'
export type { ActionReducerMapBuilder } from './mapBuilders'
export { MiddlewareArray } from './utils'

export { createEntityAdapter } from './entities/create_adapter'
export type {
  Dictionary,
  EntityState,
  EntityAdapter,
  EntitySelectors,
  EntityStateAdapter,
  EntityId,
  Update,
  IdSelector,
  Comparer,
} from './entities/models'

export { createAsyncThunk, unwrapResult } from './createAsyncThunk'
export type {
  AsyncThunk,
  AsyncThunkOptions,
  AsyncThunkAction,
  AsyncThunkPayloadCreatorReturnValue,
  AsyncThunkPayloadCreator,
  SerializedError,
} from './createAsyncThunk'

export {
  isAllOf,
  isAnyOf,
  isPending,
  isRejected,
  isFulfilled,
  isAsyncThunkAction,
  isRejectedWithValue,
} from './matchers'
export type { ActionMatchingAllOf, ActionMatchingAnyOf } from './matchers'

export { nanoid } from './nanoid'

export { default as isPlainObject } from './isPlainObject'
