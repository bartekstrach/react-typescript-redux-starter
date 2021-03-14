const isDevelopmentEnvironment = (): boolean => process.env.NODE_ENV === 'development';
const isProductionEnvironment = (): boolean => process.env.NODE_ENV === 'production';

export { isDevelopmentEnvironment, isProductionEnvironment };
