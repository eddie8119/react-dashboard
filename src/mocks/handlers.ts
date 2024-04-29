import { http, delay, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3000/firmLists', async () => {
    return HttpResponse.json([
      { id: '0', name: '拆除' },
      { id: '1', name: '機電' },
    ]);
  }),
];
