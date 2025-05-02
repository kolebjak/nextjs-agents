'use server'

import { mastra } from '@/mastra'

export async function getSentimentInfo(text: string) {
  const agent = mastra.getAgent('sentimentAgent')

  const response = await agent.generate(text)

  return response.text;
}
