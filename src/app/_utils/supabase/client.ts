import type { Database } from '@/app/_constant/type/supabase';
import { createBrowserClient } from '@supabase/ssr';

/** Server가 아닌 Client 단에서만 사용 */
export const createSupabaseClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
