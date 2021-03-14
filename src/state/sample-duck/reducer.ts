import { ISampleData, defaultSampleData } from 'src/models/sample-data.model';

import actions from './actions';
import { createSlice } from '@reduxjs/toolkit';
import types from './types';

export type ISampleDuckState = Readonly<typeof initialState>;

const initialState = {
    currentRow: defaultSampleData,
    data: [] as ReadonlyArray<ISampleData>,
    isLoading: false
};

const { reducer } = createSlice({
    initialState,
    name: types.PREFIX,
    reducers: {},
    extraReducers: builder => {
        builder
            // SELECT ROW
            .addCase(actions.selectRow, (state, action) => ({
                ...state,
                currentRow: action.payload.row
            }))
            // DESELECT ROW
            .addCase(actions.deselectRow, state => ({
                ...state,
                currentRow: defaultSampleData
            }))
            // FETCH DATA
            .addCase(actions.fetchData.pending, state => ({
                ...state,
                isLoading: true,
                data: [] as ReadonlyArray<ISampleData>
            }))
            .addCase(actions.fetchData.rejected, state => ({
                ...state,
                isLoading: false
            }))
            .addCase(actions.fetchData.fulfilled, (state, action) => ({
                ...state,
                isLoading: false,
                data: action.payload.data
            }))
            // DEFAULT
            .addDefaultCase(state => state);
    }
});

export default reducer;
