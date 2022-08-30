import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {IStore} from "store"
import {IUIStore} from "./ui.t"
import {data} from "../../data";

const initialState: IUIStore = {
    data: data,
    pagination: 5
}

/**
 * Actions and Reducers
 */
const slice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleData: (store: IUIStore, {payload}: PayloadAction<IUIStore["data"]>) => {
            store.data = payload
        },
        togglePagination: (store: IUIStore, {payload}: PayloadAction<IUIStore["pagination"]>) => {
            store.pagination = payload
        }
    },
})

export const {toggleData,togglePagination} = slice.actions

export default slice.reducer

// Selectors
export const getMainData = createSelector(
    (store: IStore) => store.ui,
    uiStore => uiStore.data
)
export const getPagination = createSelector(
    (store: IStore) => store.ui,
    uiStore => uiStore.pagination
)

