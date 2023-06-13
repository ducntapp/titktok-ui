import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '../../../Proper';
import AccountItem from '../../../AccountItem';

const cx = classNames.bind(styles);

const Header = () => {
  // const [searchResult, setSearchResult] = useState([]);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <Tippy
          visible={true}
          interactive
          render={(attrs) => (
            <div tabIndex={-1} {...attrs} className={cx('search-result')}>
              <ProperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
              </ProperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Search accounts and video" spellCheck="false" />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}></div>
      </div>
    </header>
  );
};

export default Header;
