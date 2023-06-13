import React from 'react';
import styles from './AccountItem.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/3b84649b378d2a85607a64f6466b8137~c5_100x100.jpeg?x-expires=1686798000&x-signature=J9IvSOPjeYAo1pmKpvz829cgyRQ%3D"
        alt="Error Img"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Dao Le Phuong Hoa</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <div className={cx('username')}>hoahansssi</div>
      </div>
    </div>
  );
};

export default AccountItem;
