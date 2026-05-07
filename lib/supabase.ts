import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Allow local dev to boot without Supabase configured.
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;

// Types for our database
export interface AccessRequest {
  id?: string;
  email: string;
  name?: string | null;
  organization?: string | null;
  request_type: 'full_access' | 'waitlist';
  created_at?: string;
  updated_at?: string;
}

// Helper function to submit access request
export async function submitAccessRequest(data: Omit<AccessRequest, 'id' | 'created_at' | 'updated_at'>) {
  if (!isSupabaseConfigured || !supabase) {
    return {
      id: 'stubbed',
      ...data,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  }

  const { data: result, error } = await supabase
    .from('access_requests')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('Error submitting access request:', error);
    throw error;
  }

  return result;
}

// Helper function to submit waitlist email
export async function submitWaitlistEmail(email: string) {
  return submitAccessRequest({
    email,
    name: null,
    organization: null,
    request_type: 'waitlist',
  });
}

// Helper function to submit full access request
export async function submitFullAccessRequest(email: string, name: string, organization: string) {
  return submitAccessRequest({
    email,
    name,
    organization,
    request_type: 'full_access',
  });
}