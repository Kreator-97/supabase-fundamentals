
import { createClient } from '@supabase/supabase-js'
import { envs } from '../config/envs'
import { SESSION_KEY } from '../const/session-key'

export const supabase = createClient(
  envs.VITE_SUPABASE_URL,
  envs.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      storageKey: SESSION_KEY
    }
  }
)
