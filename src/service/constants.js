const dev = 'http://localhost:9000';
const prod = 'http://47.115.15.81';

// console.log('process.env.NODE_ENV is', process.env.NODE_ENV);

export const url = process.env.NODE_ENV === 'development' ? dev : prod;
