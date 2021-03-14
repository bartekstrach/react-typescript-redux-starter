import { ISampleData, defaultSampleData } from 'src/models/sample-data.model';
import reducer, { ISampleDuckState } from './reducer';

import actions from './actions';

describe('Sample-duck reducer tests', () => {
    describe('selectRow', () => {
        // GIVEN
        const row: ISampleData = { name: 'name', size: 1 };
        const initialState: ISampleDuckState = {
            currentRow: defaultSampleData,
            data: [],
            isLoading: false
        };

        // WHEN
        const selectRow = actions.selectRow({ row });

        // THEN
        const result = reducer(initialState, selectRow);
        const { currentRow, data, isLoading } = result;

        it('should select row', () => {
            expect(currentRow).toStrictEqual({ name: 'name', size: 1 });
            expect(data).toStrictEqual([]);
            expect(isLoading).toBe(false);
        });
    });
});
