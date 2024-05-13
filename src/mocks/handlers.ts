import { http, delay, HttpResponse } from 'msw';

export const handlers = [
  http.get('/unitLists', async () => {
    return HttpResponse.json([
      { id: '0', unit: 'cm' },     
      { id: '1', unit: 'm' },  
    ]);
  }),
  http.get('/projectTypeLists', async () => {
    return HttpResponse.json([
      { id: '0', name: 'House' },     
      { id: '1', name: 'Mansion' },  
    ]);
  }),
  http.get('/firmLists', async () => {
    return HttpResponse.json([
      { id: '0', name: '拆除' },
      { id: '1', name: '機電' },
    ]);
  }),
  http.get('/projectLists', async () => {
    return HttpResponse.json([
      {
        name: "大安蔡宅",
        status: "Completed",
        fileNumber: "001",
        category: "Mansion",
        id: "0",
        date: "2024-03-20T15:03:05.138Z",
        picture: " ",
        cost: 169000,
        sellingPrice: 210000,
        thirdPartyLists: [
          {
            id: 2,
            name: "水電",
            cost: 132000,
            sellingPrice: 0,
            taskLists: [
              {
                todo: "消防",
                unit: "m2",
                quantity: 10,
                cost: 5000,
                id: 0,
                price: 8000,
                stock: 0
              },
              {
                todo: "冷熱水管",
                unit: "cm",
                quantity: 1,
                cost: 1000,
                id: 2,
                price: 0,
                stock: 0
              },
              {
                todo: "電線",
                unit: "m",
                quantity: 25,
                cost: 3000,
                id: 1713112121401,
                price: 0,
                stock: 0
              },
              {
                todo: "監視",
                unit: "m",
                quantity: 6,
                cost: 1000,
                id: 1713112133913,
                price: 0,
                stock: 0
              }
            ]
          },
          {
            id: 7,
            name: "木做",
            cost: 37000,
            sellingPrice: 0,
            taskLists: [
              {
                todo: "木門",
                unit: "m",
                quantity: 10,
                cost: 3500,
                id: 0,
                price: 8000,
                stock: 0
              },
              {
                todo: "門把",
                unit: "",
                quantity: 10,
                cost: 200,
                id: 1713113194305,
                price: 0,
                stock: 0
              }
            ]
          }
        ]
      },
    ]);
  }),
];
