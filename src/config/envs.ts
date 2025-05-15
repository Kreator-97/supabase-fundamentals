const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const VITE_SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

if( !VITE_SUPABASE_URL || !VITE_SUPABASE_ANON_KEY) {
  throw new Error('Missing environment variables: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY')
}

export const envs = {
  VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY
}
