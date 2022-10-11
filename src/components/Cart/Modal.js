import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Modal({ children }) {
  return (
    <div className={cx('modal')} style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
      {children}
    </div>
  );
}

export default Modal;
