import { OpenAPIHono, z } from '@hono/zod-openapi';

const hono = new OpenAPIHono().openapi(
  {
    method: 'get',
    path: '/',
    responses: {
      200: {
        description: 'Hello, World!',
        content: {
          'application/json': {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
      },
    },
  },
  (c) => {
    return c.json({ message: 'Hello, World!' }, 200);
  },
);

export default hono;
