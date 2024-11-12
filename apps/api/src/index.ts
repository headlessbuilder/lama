import { swaggerUI } from '@hono/swagger-ui';
import { OpenAPIHono } from '@hono/zod-openapi';
import { compress } from 'hono/compress';
import { logger } from 'hono/logger';
import v1 from './routes';

const xRoot = new OpenAPIHono().basePath('/api/hono');

xRoot.get(
  '/docs',
  swaggerUI({
    url: '/api/hono/openapi.json',
  }),
);

xRoot.doc('/openapi.json', {
  info: {
    title: 'EasyWhey API Documentation',
    description:
      'This is the API documentation for the EasyWhey API. It provides information on the available endpoints and their usage.',
    version: 'v1',
  },
  openapi: '3.1.0',
});

export const app = xRoot.route('/v1', v1).use(compress()).use(logger());

export type AppType = typeof app;
