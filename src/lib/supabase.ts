import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  rice_variety?: string;
  message: string;
}

export async function submitContactInquiry(data: ContactInquiry) {
  const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!googleScriptUrl || googleScriptUrl === 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec') {
    throw new Error('Google Script URL not configured. Please check your .env file.');
  }

  try {
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Successfully sent to Google Sheets');
    return { success: true };
  } catch (error) {
    console.error('Failed to send to Google Sheets:', error);
    throw new Error('Failed to submit contact inquiry. Please try again.');
  }
}
