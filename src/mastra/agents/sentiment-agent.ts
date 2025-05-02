import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { Memory } from '@mastra/memory';
import { tokenTool } from '../tools/token-tool';

export const sentimentAgent = new Agent({
  name: 'Sentiment Agent',
  instructions: `
      You are a cryptocurrency expert who is able to assess sentiment and credibility of tweeted message. 
      
      Your primary function is to provide brief information whether tweet mentions a cryptocurrency. If yes, 
      reasonably asses if there is sentiment to buy or to sell. When responding: 
      
      - Do not ask additional questions
      - If tweet is not cryptocurrency-related just respond: "No token found."
      - Provide information whether token is tradeable or not. Use tokenTool to fetch token tradability. If token is not tradable, briefly inform user about that fact.
`,
  model: openai('gpt-4o'),
  tools: { tokenTool },
  memory: new Memory({
    options: {
      lastMessages: 1,
      semanticRecall: false,
      threads: { generateTitle: false },
    },
  }),
});
