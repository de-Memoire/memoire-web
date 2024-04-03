'use client';

import { AuthType } from '@/app/_constant';
import { login } from './actions';

interface LoginButtonBaseProps {
  type: (typeof AuthType)[keyof typeof AuthType];
  text: string;
}

const LoginButtonBase = ({ type, text }: LoginButtonBaseProps) => (
  <button
    onClick={() => {
      if (typeof window !== 'undefined' && window.location) {
        login(type, window.location.origin);
      }
    }}
  >
    {text}
  </button>
);

export default LoginButtonBase;
