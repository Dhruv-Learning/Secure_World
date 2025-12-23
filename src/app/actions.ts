
"use server";

import { categorizeLead, type CategorizeLeadInput } from '@/ai/flows/categorize-leads-flow';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  requirement: z.string().min(10, { message: 'Requirement must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: {
    category: string;
    urgency: string;
    approach: string;
  };
};

export async function handleContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = formSchema.safeParse(rawFormData);
  
  if (!validatedFields.success) {
    const errorFields = validatedFields.error.flatten().fieldErrors;
    const issues = Object.values(errorFields).flat();

    return {
      message: 'Please check your input.',
      issues: issues,
      fields: {
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        requirement: formData.get('requirement') as string,
      }
    };
  }

  try {
    const leadData: CategorizeLeadInput = validatedFields.data;
    const result = await categorizeLead(leadData);
    
    return {
      message: "Thank you for your submission! Our team will be in touch shortly.",
      data: result,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An error occurred while processing your request. Please try again later.",
      fields: validatedFields.data,
    };
  }
}
