export interface ISampleData {
    name: Readonly<string>;
    size: Readonly<number>;
}

export const defaultSampleData: Readonly<ISampleData> = {
    name: undefined,
    size: undefined
};
