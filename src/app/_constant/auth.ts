import { type Provider } from '@supabase/supabase-js';

export const AuthType = {
  GOOGLE: 'GOOGLE',
  KAKAO: 'KAKAO',
} as const;

export const SocialProviderByAuthType = {
  [AuthType.GOOGLE]: 'google',
  [AuthType.KAKAO]: 'kakao',
} as const satisfies Record<(typeof AuthType)[keyof typeof AuthType], Provider>;
