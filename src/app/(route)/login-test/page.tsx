import {
  GoogleLoginButton,
  KakaoLoginButton,
} from '@/app/_components/LoginButton';

const Page = () => {
  return (
    <>
      <GoogleLoginButton />
      <KakaoLoginButton />
      <form action="/auth/logout" method="post">
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default Page;
