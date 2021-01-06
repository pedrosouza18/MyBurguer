import {rest} from 'msw'

export const handlers = [
  rest.get('*/ingredients.json', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        cheese: 0,
        meat: 0,
        bacon: 0,
        salad: 0,
      }),
    ),
  ),
  rest.post('*/orders.json', (req, res, ctx) => res(ctx.status(200))),
  rest.get('*/orders.json', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        '-MJ7PMw05bi6tW36hTYb': {
          bacon: 2,
          cheese: 2,
          customer: {
            address: {
              country: 'Brazil',
              street: 'Praça Amambaí',
              zipCode: '20730120',
            },
            email: 'souzapedro70@gmail.com',
            name: 'Pedro',
          },
          deliveryMethod: 'fastest',
          meat: 2,
          salad: 2,
        },
      }),
    ),
  ),
]
