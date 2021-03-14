import { ISampleData, defaultSampleData } from 'src/models/sample-data.model';

const isRowSelected = (row: ISampleData): boolean => row.name !== defaultSampleData.name && row.size !== defaultSampleData.size;

export default { isRowSelected };
