import React, { useState } from 'react';
import ProperWrapper from '../Wrapper';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFunc = () => {};

const Menu = ({ children, items = [], onChange = defaultFunc }) => {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement="bottom-start"
      render={(attrs) => (
        <div tabIndex={-1} {...attrs} className={cx('content')}>
          {history.length > 1 && (
            <Header title={'Language'} OnBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))} />
          )}
          <ProperWrapper className={cx('menu-proper')}>{renderItem()}</ProperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
