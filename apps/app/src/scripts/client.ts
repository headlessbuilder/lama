import { hc } from 'hono/client';
import { websiteURL } from '~/scripts/utils';
import { AppType } from '@llm.report/api';

const client = hc<AppType>(websiteURL());

export default client;
