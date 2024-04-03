import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { type NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const supabase = createSupabaseServerClient();

  const { data } = await supabase.auth.getUser();

  if (data.user) {
    await supabase.auth.signOut();
  }

  return NextResponse.redirect(new URL('/', req.url), {
    status: 302,
  });
};
