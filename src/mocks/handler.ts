/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import applications from './data/applications.data.json';
import { book, books } from './data/book.data';

export const handlers = [
  rest.get('/api/books', (req, res, ctx) => {
    const page = parseInt(req.url.searchParams.get('page') ?? '1', 10);
    const limit = parseInt(req.url.searchParams.get('limit') ?? '10', 10);
    const to = page * limit;
    const from = to - limit;
    const data = books.slice(from, to);
    return res(ctx.status(200), ctx.json(data));
  }),
  rest.get('/api/books/:bookId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(book));
  }),
  rest.post('/api/books', (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(req.body));
  }),
  rest.put('/api/books/:bookId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  }),
  rest.get('/api/applications', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(applications));
  }),
];
