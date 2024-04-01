import React from 'react';
import * as styles from './Nav.css';
import { useAuth } from '@/app/_hooks/useAuth';
import User from '/public/icon/user.svg';
import Logo from '/public/icon/logo.svg';
import { useState } from 'react';
import { Dropdown } from '../../molecules';
import { DropdownItem } from '../../atoms';
import { useRouter } from 'next/navigation';

const Nav = () => {
  const isAuthenticated = useAuth();
  const router = useRouter();
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);

  type UserInfoDataType = {
    [key: string]: {
      title: string;
      goNavi: () => void;
    };
  };

  const UserInfoData: UserInfoDataType = {
    library: {
      title: '내 서재',
      goNavi: () => router.push(`/library`),
    },
    setting: {
      title: '설정',
      goNavi: () => router.push(`/setting`),
    },
  };

  return (
    <div className={styles.wrap}>
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
            {Object.keys(UserInfoData).map((key) => (
              <DropdownItem
                key={key}
                onClick={UserInfoData[key].goNavi}
                title={UserInfoData[key].title}
              />
            ))}
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default Nav;
