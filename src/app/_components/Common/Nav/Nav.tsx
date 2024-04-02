'use client';

import React from 'react';
import * as styles from './Nav.css';
import { useAuth } from '@/app/_hooks/useAuth';
import User from '/public/icon/user.svg';
import Logo from '/public/icon/logo.svg';
import { useState } from 'react';
import { Dropdown } from '../../molecules';
import { DropdownItem } from '../../atoms';
import { useRouter } from 'next/navigation';

export type UserInfoConfigType = {
  [key: string]: {
    title: string;
    goNavi: () => void;
  };
};

export type NavProps = {
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
};

/**
 * 레이아웃 파일에서 사용할 네비 컴포넌트
 */
const Nav = ({ className }: NavProps) => {
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
  };
  // } as const satisfies UserInfoDataType; //TODO

  return (
    <div className={`${styles.wrap} ${className}`}>
      <div className={styles.logo}>
        <Logo />
      </div>
      {isAuthenticated && (
        <div
          className={styles.user}
          onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
        >
          <User />
        </div>
      )}
      {isOpenUserMenu && (
        <div className={styles.absoluteBox}>
          <Dropdown>
            {Object.keys(UserInfoConfigType).map((key) => (
              <DropdownItem
                key={key}
                onClick={UserInfoConfigType[key].goNavi}
                title={UserInfoConfigType[key].title}
              />
            ))}
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default Nav;
