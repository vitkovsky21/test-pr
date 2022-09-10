import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from './handler.reducer'

export namespace DataSelectors {
    export const state = createFeatureSelector<State>("data")
    export const data = createSelector(state, (state) => state.data)
    export const changeData = createSelector(state, (state) => state.changeData)
}