import React from 'react';
import classnames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classnames.bind(styles);
const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <h2>Side bar</h2>
    </aside>
  );
};

export default Sidebar;
