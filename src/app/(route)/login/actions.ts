'use server';

import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/app/_utils/supabase/server';
import { AuthType, SocialProviderByAuthType } from '@/app/_constant';

export const login = async (
  authType: (typeof AuthType)[keyof typeof AuthType],
  origin: string,
) => {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: SocialProviderByAuthType[authType],
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  console.log(data);

  if (data.url) {
    redirect(data.url);
  }
};
