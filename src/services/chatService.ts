import { Groq } from "groq-sdk";
import { API_CONFIG } from '../config/api';

const groq = new Groq({
  apiKey: API_CONFIG.GROQ_API.key, dangerouslyAllowBrowser : true
});

// Predefined context for agriculture-related queries
const AGRICULTURE_CONTEXT = `
You are an expert agricultural assistant for Indian farmers. You specialize in:
- Indian agricultural laws and policies
- Crop management and best practices
- Weather-based farming recommendations
- Market trends and pricing
- Sustainable farming techniques
Please provide clear, practical advice in simple language.
`;

export const getChatResponse = async (
  message: string,
  language: string
): Promise<string> => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: AGRICULTURE_CONTEXT },
        { role: "user", content: message }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.6,
      max_tokens: 1024,
      stream: false,
    });

    return completion.choices[0]?.message?.content || "Sorry, I couldn't process your request.";
  } catch (error) {
    console.error('Chat service error:', error);
    throw new Error('Failed to get response from chat service');
  }
};