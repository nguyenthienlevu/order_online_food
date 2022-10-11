import config from '~/config';
import classNames from 'classnames/bind';
import styles from './header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import CartItem from '~/components/MenuCart/CartItem';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Header() {
  const [showMenuCart, setShowMenuCart] = useState(false);
  const curentUser = false;
  const clickCart = () => {
    setShowMenuCart(!showMenuCart);
  };

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
          <Button text>Contact</Button>
          <Button text>About US</Button>
        </div>
        <div className={cx('user')}>
          <span className={cx('cart')}>
            <FontAwesomeIcon
              icon={faCartPlus}
              className={cx('cart-item')}
              onClick={clickCart}
            />
            <div className={cx('menu-cart')}>
              {showMenuCart && <CartItem />}
            </div>
          </span>
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
              alt=""
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
