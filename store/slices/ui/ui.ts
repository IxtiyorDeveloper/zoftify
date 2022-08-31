import {createAsyncThunk, createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IStore} from 'store'
import {IData, IStatus, IUIStore} from './ui.t'
import * as asyncFunctions from "service/functions"
import {toast} from "react-toastify";


export const getAllData: any = createAsyncThunk('data/get', async (
    data,
    {dispatch, getState}
) => {
    try {
        dispatch(setLoading({key: "data", data: true}))
        const res = await asyncFunctions.getData((getState() as IStore).ui.data.data)
        toast.success("Posts successfully listed");
        return res?.data
    } catch (err) {
        dispatch(setError({key: "data", data: true}))
        toast.error("Error");
        throw err
    }
})

export const createPost: any = createAsyncThunk('data/create',
    async (data: IData, {dispatch, getState}) => {
        try {
            dispatch(setLoading({key: "new", data: true}))
            const res = await asyncFunctions.addPost((getState() as IStore).ui.data.data, data)
            toast.success("Successfully created")
            // @ts-ignore
            return res?.data
        } catch (err) {
            dispatch(setError({key: "new", data: true}))
            toast.error("Error");
            throw err
        }
    })

export const changePostStatus: any = createAsyncThunk('data/changeStatus',
    async (data: IStatus, {dispatch, getState}) => {
        try {
            console.log(data, "data")
            dispatch(setLoading({key: "status", data: true}))
            const res = await asyncFunctions.changeStatus(data.id, data.status, (getState() as IStore).ui.data.data)
            toast.success(`Successfully changed to ${data?.status}`)
            // @ts-ignore
            return res?.data
        } catch (err: any) {
            dispatch(setError({key: "status", data: true}))
            toast.error(err?.message)
            throw err
        }
    })

const initialState: IUIStore = {
    data: {
        data: [],
        isLoading: false,
        isError: false
    },
    new: {
        isLoading: false,
        isError: false
    },
    status: {
        isLoading: false,
        isError: false
    },
    pagination: 5,
}

/**
 * Actions and Reducers
 */
const slice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLoading: (store, {payload}) => {
            const {key, data}: { key: "data", data: boolean } = payload
            store[key].isLoading = data
        },
        setError: (store, {payload}) => {
            const {key, data}: { key: "data", data: boolean } = payload
            store[key].isError = data
        },
        togglePagination: (
            store: IUIStore,
            {payload}: PayloadAction<IUIStore['pagination']>,
        ) => {
            store.pagination = payload
        },
    },
    extraReducers: builder => builder.addCase(getAllData.fulfilled, (store, {payload}) => {
        store.data.data = payload;
        store.data.isLoading = false;
        store.data.isError = false;
    }).addCase(createPost.fulfilled, (store, {payload}) => {
        store.data.data = payload
        store.new.isLoading = false;
        store.new.isError = false;
    }).addCase(changePostStatus.fulfilled, (store, {payload}) => {
        store.data.data = payload
        store.status.isLoading = false;
        store.status.isError = false;
    }).addCase(getAllData.rejected, (store) => {
        store.data.isLoading = false;
        store.data.isError = true;
    }).addCase(createPost.rejected, (store) => {
        store.new.isLoading = false;
        store.new.isError = true;
    }).addCase(changePostStatus.rejected, (store) => {
        store.status.isLoading = false;
        store.status.isError = true;
    })
})

export const {togglePagination, setLoading, setError} = slice.actions

export default slice.reducer

// Selectors
export const getMainData = createSelector(
    (store: IStore) => store.ui,
    (uiStore) => uiStore.data.data,
)

export const getPagination = createSelector(
    (store: IStore) => store.ui,
    (uiStore) => uiStore.pagination,
)

export const getCallStatus = (key: "data" | "new" | "status") => createSelector(
    (store: IStore) => store.ui,
    reducer => ({isLoading: reducer[key].isLoading, isError: reducer[key].isError}),
)
