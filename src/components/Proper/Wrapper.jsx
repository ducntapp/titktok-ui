import React from 'react';
import styles from './Proper.module.scss';
import classnames from 'classnames/bind';

const cx= classnames.bind(styles);

const Wrapper = ({children}) => {
  return <div className={cx('wrapper')}>{children}</div>;
};

export default Wrapper;
