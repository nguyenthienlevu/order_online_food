import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Modal({ children }) {
  return (
    <div
      className={cx('modal')}
      style={{
        backgroundImage: `URL(
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/496f5a134267301.61d2dceebff92.jpg'
        )`,
      }}
    >
      helo
    </div>
  );
}

export default Modal;
