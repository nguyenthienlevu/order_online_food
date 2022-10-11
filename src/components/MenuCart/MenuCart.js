import classNames from 'classnames/bind';
import styles from './MenuCart.module.scss';

const cx = classNames.bind(styles);

function MenuCart({ children }) {
  return <div className={cx('MenuCart')}>{children}</div>;
}

export default MenuCart;
