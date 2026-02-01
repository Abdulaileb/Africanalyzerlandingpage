import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface AccessRequest {
  id?: string;
  email: string;
  name?: string;
  organization?: string;
  request_type: 'full_access' | 'waitlist';
  created_at?: string;
  updated_at?: string;
}

// Helper function to submit access request
export async function submitAccessRequest(data: Omit<AccessRequest, 'id' | 'created_at' | 'updated_at'>) {
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
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// // Debug: Log environment variables (remove after fixing)
// console.log('🔍 Supabase URL:', supabaseUrl);
// console.log('🔍 Supabase Key exists:', !!supabaseAnonKey);
// console.log('🔍 Supabase Key length:', supabaseAnonKey?.length);

// if (!supabaseUrl || !supabaseAnonKey) {
//   console.error('❌ Missing Supabase environment variables!');
//   console.error('VITE_SUPABASE_URL:', supabaseUrl);
//   console.error('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'exists' : 'missing');
//   throw new Error('Missing Supabase environment variables');
// }

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// // Types for our database
// export interface AccessRequest {
//   id?: string;
//   email: string;
//   name?: string | null;
//   organization?: string | null;
//   request_type: 'full_access' | 'waitlist';
//   created_at?: string;
//   updated_at?: string;
// }

// // Helper function to submit access request
// export async function submitAccessRequest(data: Omit<AccessRequest, 'id' | 'created_at' | 'updated_at'>) {
//   console.log('📤 Submitting to Supabase:', data);
  
//   try {
//     const { data: result, error } = await supabase
//       .from('access_requests')
//       .insert([data])
//       .select()
//       .single();

//     if (error) {
//       console.error('❌ Supabase error details:', {
//         message: error.message,
//         details: error.details,
//         hint: error.hint,
//         code: error.code
//       });
//       throw error;
//     }

//     console.log('✅ Successfully inserted:', result);
//     return result;
//   } catch (err) {
//     console.error('❌ Exception during insert:', err);
//     throw err;
//   }
// }

// // Helper function to submit waitlist email
// export async function submitWaitlistEmail(email: string) {
//   console.log('📧 Submitting waitlist email:', email);
//   return submitAccessRequest({
//     email,
//     name: null,
//     organization: null,
//     request_type: 'waitlist',
//   });
// }

// // Helper function to submit full access request
// export async function submitFullAccessRequest(email: string, name: string, organization: string) {
//   console.log('📝 Submitting full access request:', { email, name, organization });
//   return submitAccessRequest({
//     email,
//     name,
//     organization,
//     request_type: 'full_access',
//   });
// }

// // Test connection function
// export async function testSupabaseConnection() {
//   console.log('🧪 Testing Supabase connection...');
//   try {
//     const { data, error } = await supabase
//       .from('access_requests')
//       .select('count')
//       .limit(1);
    
//     if (error) {
//       console.error('❌ Connection test failed:', error);
//       return false;
//     }
    
//     console.log('✅ Supabase connection successful!');
//     return true;
//   } catch (err) {
//     console.error('❌ Connection test exception:', err);
//     return false;
//   }
// }