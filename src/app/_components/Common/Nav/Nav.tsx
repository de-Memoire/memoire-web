'use client';

import React, { useState, useEffect } from 'react';
import * as styles from './Nav.css';
import { useAuth } from '@/app/_hooks/useAuth';
import User from '/public/icon/user.svg';
import Logo from '/public/icon/logo.svg';
import { Dropdown } from '@/app/_components/molecules';
import { DropdownItem } from '@/app/_components/atoms';
import { useRouter } from 'next/navigation';
import { postLogout } from '@/app/userApi/postLogout';

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

const Nav = ({ className, profileImageUrl, isAuth }: NavProps) => {
  const router = useRouter();
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);

  const handleLogout = async () => {
    try {
      await postLogout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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
      goNavi: handleLogout,
    },
  };

  const noUserInfoConfigType: UserInfoConfigType = {
    login: {
      title: '로그인',
      goNavi: () => router.push(`/login`),
    },
  };

  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.logo} onClick={() => router.push(`/`)}>
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
