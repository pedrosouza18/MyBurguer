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
]
