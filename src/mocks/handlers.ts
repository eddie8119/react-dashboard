import { http, delay, HttpResponse } from 'msw';

export const handlers = [
  http.get('/firmLists', async () => {
    return HttpResponse.json([
      { id: '0', name: '拆除' },
      { id: '1', name: '機電' },
    ]);
  }),
  http.post('/firmLists', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: 'Data posted successfully' })
    );
  }),
];
