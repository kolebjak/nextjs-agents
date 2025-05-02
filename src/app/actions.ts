'use server'

import { mastra } from '@/mastra'

export async function getWeatherInfo(city: string) {
  const agent = mastra.getAgent('weatherAgent')

  const response = await agent.generate(`What's the weather like in ${city}?`)

  return response.text;
}
