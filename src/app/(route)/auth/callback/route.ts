import { type NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error && data.user.email) {
      const prevUserResult = await supabase
        .from('user')
        .select('id')
        .eq('email', data.user.email)
        .maybeSingle();
      if (!prevUserResult.error) {
        if (!prevUserResult.data) {
          const { error } = await supabase.from('user').insert({
            email: data.user.email,
            username:
              data.user.user_metadata.preferred_username ??
              data.user.user_metadata.user_name,
            supabase_auth_id: data.user.id,
            profile_image_url: data.user.user_metadata.avatar_url,
          });
          console.error(error);
        }
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
