'use client';

import { LoginButton } from '@/app/_components/atoms';
import { login } from './actions';
import { AuthType } from '@/app/_constant';

interface SocialLoginButtonProps {
  type: AuthType;
}

const SocialLoginButton = ({ type }: SocialLoginButtonProps) => (
  <LoginButton
    type={type}
    onClick={() => {
      if (typeof window !== 'undefined' && window.location) {
        login(type, window.location.origin);
      }
    }}
  />
);

export default SocialLoginButton;
