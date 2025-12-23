'use server';

/**
 * @fileOverview A lead categorization AI agent.
 * 
 * - categorizeLead - A function that handles the lead categorization process.
 * - CategorizeLeadInput - The input type for the categorizeLead function.
 * - CategorizeLeadOutput - The return type for the categorizeLead function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeLeadInputSchema = z.object({
  name: z.string().describe('The name of the lead.'),
  phone: z.string().describe('The phone number of the lead.'),
  email: z.string().email().describe('The email address of the lead.'),
  requirement: z.string().describe('The specific security requirements of the lead.'),
});
export type CategorizeLeadInput = z.infer<typeof CategorizeLeadInputSchema>;

const CategorizeLeadOutputSchema = z.object({
  category:
    z.string().describe('The category of the lead, e.g., residential, corporate, industrial, or event, based on their requirements.'),
  urgency:
    z.string().describe('The urgency level of the lead, e.g., high, medium, or low, based on the immediacy of their needs.'),
  approach:
    z.string().describe('The most suitable approach to convert the lead into a client.'),
});
export type CategorizeLeadOutput = z.infer<typeof CategorizeLeadOutputSchema>;

export async function categorizeLead(input: CategorizeLeadInput): Promise<CategorizeLeadOutput> {
  return categorizeLeadFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeLeadPrompt',
  input: {schema: CategorizeLeadInputSchema},
  output: {schema: CategorizeLeadOutputSchema},
  prompt: `You are an AI assistant specialized in categorizing leads for a security provider company.

  Analyze the lead's information and categorize them based on their requirements. Also, determine the urgency level and the most suitable approach to convert them into a client.

  Name: {{{name}}}
  Phone: {{{phone}}}
  Email: {{{email}}}
  Requirement: {{{requirement}}}

  Category: {category}
  Urgency: {urgency}
  Approach: {approach}`,
});

const categorizeLeadFlow = ai.defineFlow(
  {
    name: 'categorizeLeadFlow',
    inputSchema: CategorizeLeadInputSchema,
    outputSchema: CategorizeLeadOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
