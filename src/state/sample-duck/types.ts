const PREFIX = 'state/sample-duck';

const DESELECT_ROW = 'deselect-row';
const FETCH_DATA = 'fetch-data';
const SELECT_ROW = 'select-row';

export default {
    DESELECT_ROW: `${PREFIX}/${DESELECT_ROW}`,
    FETCH_DATA: `${PREFIX}/${FETCH_DATA}`,
    PREFIX,
    SELECT_ROW: `${PREFIX}/${SELECT_ROW}`
};
