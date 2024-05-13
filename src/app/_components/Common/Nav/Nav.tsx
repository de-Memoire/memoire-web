'use client';

import React from 'react';
import * as styles from './Nav.css';
import { useAuth } from '@/app/_hooks/useAuth';
import User from '/public/icon/user.svg';
import Logo from '/public/icon/logo.svg';
import { useState } from 'react';
import { Dropdown } from '@/app/_components/molecules';
import { DropdownItem } from '@/app/_components/atoms';
import { useRouter } from 'next/navigation';

export type UserInfoConfigType = {
  [key: string]: {
    title: string;
    goNavi: () => void;
  };
};

export type NavProps = {
  isAuth?: boolean;
  profileImageUrl?: string;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
};

/**
 * 레이아웃 파일에서 사용할 네비 컴포넌트
 */
const Nav = ({ className, profileImageUrl, isAuth }: NavProps) => {
  const isAuthenticated = useAuth();
  const router = useRouter();
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);

  const UserInfoConfigType: UserInfoConfigType = {
    library: {
      title: '내 서재',
      goNavi: () => router.push(`/library`),
    },
    setting: {
      title: '설정',
      goNavi: () => router.push(`/setting`),
    },
    logout: {
      title: '로그아웃',
      goNavi: () => {},
    },
  };
  // } as const satisfies UserInfoDataType; //TODO

  const noUserInfoConfigType: UserInfoConfigType = {
    login: {
      title: '로그인',
      goNavi: () => router.push(`/login`),
    },
  };

  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div
        className={styles.user}
        onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
      >
        {profileImageUrl ? (
          <img src={profileImageUrl} alt="profile image" />
        ) : (
          <User />
        )}
      </div>
      {isOpenUserMenu && (
        <div className={styles.absoluteBox}>
          <Dropdown>
            {Object.keys(
              isAuth ? UserInfoConfigType : noUserInfoConfigType,
            ).map((key) => {
              const configType = isAuth
                ? UserInfoConfigType
                : noUserInfoConfigType;
              const { goNavi, title } = configType[key];
              return (
                <DropdownItem
                  key={key}
                  onClick={() => {
                    goNavi();
                    setIsOpenUserMenu(false);
                  }}
                  title={title}
                />
              );
            })}
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default Nav;
