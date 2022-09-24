/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import books from './data/books.data.json';
import book from './data/book.data.json';
import applications from './data/applications.data.json';

export const handlers = [
  rest.get('/api/books', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(books));
  }),
  rest.get('/api/book/:bookId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(book));
  }),
  rest.get('/api/applications', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(applications));
  }),
];
