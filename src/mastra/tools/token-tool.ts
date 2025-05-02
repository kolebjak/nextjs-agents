import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const tokenTool = createTool({
  id: 'get-token',
  description: 'Get information about token',
  inputSchema: z.object({
    tokenTicker: z.string().describe('Token ticker, eg. BTC, ETH, ...'),
  }),
  outputSchema: z.object({
    price: z.number().describe('Current token price in USD'),
    isTradable: z.boolean()
  }).nullish(),
  execute: async ({ context }) => {
    return await getToken(context.tokenTicker);
  },
});

const tokens = [
  {
    ticker: 'BTC',
    price: 96000,
    isTradable: true
  },
  {
    ticker: 'ETH',
    price: 1800,
    isTradable: true
  },
  {
    ticker: 'XRP',
    price: 2.24,
    isTradable: true
  },
  {
    ticker: 'PEPE',
    price: 0.000008794,
    isTradable: false
  },
  {
    ticker: 'SOL',
    price: 151,
    isTradable: true
  },
]

const getToken = async (ticker: string) => {
  const token = tokens.find((token) => token.ticker === ticker);

  if(token) {
    return token
  }

  return {
    ticker,
    price: 0,
    isTradable: false
  };
};
