import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faSignIn,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '@/components/Proper';
import AccountItem from '@/components/AccountItem';
import Button from '@/components/Button';
import Menu from '../../../Proper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        { code: 'en', title: 'English', type: 'language' },
        { code: 'vn', title: 'Tiếng Việt', type: 'language' },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

const Header = () => {
  const [searchResult, setSearchResult] = useState([]);

  const handleOnMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
        break;
    }
  };

  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <div>
          <HeadlessTippy
            visible={searchResult.length > 0}
            interactive
            render={(attrs) => (
              <div tabIndex={-1} {...attrs} className={cx('search-result')}>
                <ProperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
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
          </HeadlessTippy>
        </div>
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <button>
                <FontAwesomeIcon icon={faCloudUpload} />
              </button>
              <button>
                <FontAwesomeIcon icon={faMessage} />
              </button>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={MENU_ITEMS} onChange={handleOnMenuChange}>
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c473260ea23e5c1d143dc62e51816670~c5_100x100.jpeg?x-expires=1687244400&x-signature=S9XcGfcwT1mx64rTH5dyV%2F3HRVM%3D"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
