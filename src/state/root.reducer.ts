import sampleDuck, { ISampleDuckState } from './sample-duck/reducer';

import { combineReducers } from 'redux';

export interface IRootState {
    readonly sampleDuck: ISampleDuckState;
}

const rootReducer = combineReducers<IRootState>({
    sampleDuck
});

export default rootReducer;
