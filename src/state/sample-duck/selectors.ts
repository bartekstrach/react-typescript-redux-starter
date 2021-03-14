import { ISampleDuckState } from './reducer';
import { createSelector } from 'reselect';
import utils from './utils';

const currentRowSelector = (state: ISampleDuckState) => state.currentRow;
const selectCurrentRow = createSelector(currentRowSelector, currentRow => currentRow);
const isRowSelected = createSelector(selectCurrentRow, currentRow => utils.isRowSelected(currentRow));

const dataSelector = (state: ISampleDuckState) => state.data;
const selectData = createSelector(dataSelector, data => data);

export default { isRowSelected, selectCurrentRow, selectData };
