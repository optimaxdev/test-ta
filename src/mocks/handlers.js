import { rest } from 'msw';
import { mockGetCarts } from './resolvers/mockCarts';

export const handlers = [
    rest.get('https://mocki.io/v1/a92eda42-69d0-43c5-bc66-cd56e4b8c906', mockGetCarts)
]