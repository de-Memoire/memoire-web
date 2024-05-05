import LogoIcon from '/public/icon/logo_icon.svg';
import Logo from '/public/icon/logo.svg';
import SocialLoginButton from './SocialLoginButton';
import * as style from './login.css';
import { AuthType } from '@/app/_constant';

const INTRO_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';

export default function Page() {
  return (
    <div className={`${style.wrap} login`}>
      <div className={`${style.login} ani_floating`}>
        <div className={style.logo}>
          <div>
            <LogoIcon />
          </div>
          <div>
            <Logo />
          </div>
        </div>
        <div className={style.title}>{INTRO_TEXT}</div>
        <div className={style.buttonContainer}>
          <SocialLoginButton type={AuthType.KAKAO} />
          <SocialLoginButton type={AuthType.GOOGLE} />
        </div>
      </div>
    </div>
  );
}
