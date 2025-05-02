
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { LibSQLStore } from '@mastra/libsql';

import { weatherAgent } from './agents/weather-agent';
import { sentimentAgent } from '@/mastra/agents/sentiment-agent'

export const mastra = new Mastra({
  agents: { weatherAgent, sentimentAgent },
  storage: new LibSQLStore({
    url: "file:./mastra.db",
  }),
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
