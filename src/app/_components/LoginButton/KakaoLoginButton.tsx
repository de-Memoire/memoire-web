import { AuthType } from '@/app/_constant';
import LoginButtonBase from './LoginButtonBase';

const KakaoLoginButton = () => (
  <LoginButtonBase type={AuthType.KAKAO} text="Kakao Login" />
);

export default KakaoLoginButton;
