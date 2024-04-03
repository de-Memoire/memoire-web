import { AuthType } from '@/app/_constant';
import LoginButtonBase from './LoginButtonBase';

const GoogleLoginButton = () => (
  <LoginButtonBase type={AuthType.GOOGLE} text="Google Login" />
);

export default GoogleLoginButton;
