import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
// safe to expose since RLS is activated in supabase
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_KEY

// Create a single supabase client for interacting with your database
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY)

export default supabase
