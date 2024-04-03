import LogoIcon from '/public/icon/logo_icon.svg';
import Logo from '/public/icon/logo.svg';
import LoginButton, {
  LoginType,
} from '@/app/_components/atoms/LoginButton/LoginButton';
import * as style from './login.css';

const INTRO_TEXT = '타인에게서\n자신의 이야기를\n발견하세요.';

export default function Page() {
  function temp() {
    console.log('temp');
  }

  return (
    <div className={style.wrap}>
      <div className={style.login}>
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
          <LoginButton onClick={temp} type={LoginType.KaKao}></LoginButton>
          <LoginButton onClick={temp} type={LoginType.Google}></LoginButton>
        </div>
      </div>
    </div>
  );
}
