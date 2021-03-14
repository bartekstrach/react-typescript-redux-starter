import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { API_URL } from 'src/constants/api.constants';
import { ISampleData } from 'src/models/sample-data.model';
import axios from 'axios';
import types from './types';

// FETCH DATA
interface IFetchDataPayload {
    data: ReadonlyArray<ISampleData>;
}

const fetchData = createAsyncThunk<IFetchDataPayload>(types.FETCH_DATA, async () => {
    const res = await axios.get<ReadonlyArray<ISampleData>>(`${API_URL}/fetch-manual-order`);
    return { data: res.data };
});

// SELECT ROW
interface ISelectRowMeta {
    row: Readonly<ISampleData>;
}

const selectRow = createAction<ISelectRowMeta>(types.SELECT_ROW);

// DESELECT ROW
const deselectRow = createAction(types.DESELECT_ROW);

export default { deselectRow, fetchData, selectRow };
