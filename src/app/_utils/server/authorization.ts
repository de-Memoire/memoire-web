import { ErrorCode, ErrorResponse } from '@/app/_constant/api';
import type { User } from '@/app/_constant/type/model';
import type { Database } from '@/app/_constant/type/supabase';
import {
  type User as SupabaseAuthUser,
  type SupabaseClient,
} from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import 'server-only';

export const authorize = async (
  supabaseInstance: SupabaseClient<Database>,
): Promise<
  | {
      isSuccess: true;
      supabaseAuthUser: SupabaseAuthUser;
      user: User;
    }
  | {
      isSuccess: false;
      response: NextResponse;
    }
> => {
  const { data: authData } = await supabaseInstance.auth.getUser();

  if (!authData.user) {
    return {
      isSuccess: false,
      response: NextResponse.json(
        new ErrorResponse({
          status: 401,
          message: 'Need to login',
          errorCode: ErrorCode.UNAUTHORIZED,
        }),
        { status: 401 },
      ),
    };
  }

  const result = await supabaseInstance
    .from('user')
    .select('*')
    .eq('supabase_auth_id', authData.user.id)
    .is('deleted_at', null)
    .single();

  if (result.error) {
    return {
      isSuccess: false,
      response: NextResponse.json(
        new ErrorResponse({
          status: result.status,
          message: result.statusText,
          errorCode: ErrorCode.SUPABASE_ERROR,
          extra: result.error,
        }),
        { status: result.status },
      ),
    };
  }

  return {
    isSuccess: true,
    supabaseAuthUser: authData.user,
    user: result.data,
  };
};
