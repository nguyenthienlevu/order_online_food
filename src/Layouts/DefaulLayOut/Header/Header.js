import { Link } from 'react-router-dom';
import config from '~/config';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Header() {
  const curentUser = false;

  return (
    <div className={cx('header')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="onlineFood" className={cx('logo-img')} />
        </div>

        <div className={cx('action')}>
          <Button to={config.routes.home} text>
            Home
          </Button>
          <Button to={config.routes.profileUser} text>
            Profile
          </Button>
        </div>

        <div className={cx('user')}>
          {curentUser ? (
            <>
              <div className={cx('register')}>
                <Button outline>Đăng kí</Button>
              </div>
              <div className={cx('logIn')}>
                <Button>Đăng nhập</Button>
              </div>
            </>
          ) : (
            <img
              className={cx('user-avatar')}
              src="https://toigingiuvedep.vn/wp-content/uploads/2021/01/avatar-dep-cute.jpg"
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
