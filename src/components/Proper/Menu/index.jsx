import React from 'react';
import ProperWrapper from '../Wrapper';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';


const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
  const renderItem = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-start"
      render={(attrs) => (
        <div tabIndex={-1} {...attrs} className={cx('content')}>
          <ProperWrapper className={cx('menu-proper')}>{renderItem()}</ProperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
