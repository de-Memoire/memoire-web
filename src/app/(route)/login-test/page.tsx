import {
  GoogleLoginButton,
  KakaoLoginButton,
} from '@/app/_components/LoginButton';
import { createSupabaseServerComponentClient } from '@/app/_utils/supabase/server';

const Page = async () => {
  const { data } = await createSupabaseServerComponentClient().auth.getUser();

  return (
    <>
      <GoogleLoginButton />
      <KakaoLoginButton />
      <form action="/auth/logout" method="post">
        <button type="submit">Logout</button>
      </form>
      <p>{data.user !== null ? `User Id: ${data.user.id}` : 'Not Loggined'}</p>
    </>
  );
};

export default Page;
