import classNames from 'classnames/bind';
import styles from './DefaulLayOut.module.scss';

import SiderBar from '../SiderBar';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';

const cx = classNames.bind(styles);

function DefaulLayOut({ children }) {
  return (
    <div className={cx('wapper')}>
      <header className={cx('header')}>
        <Header />
      </header>
      <div className={cx('container')}>
        <div className={cx('siderBar')}>
          <SiderBar />
        </div>
        <div className={cx('content')}>
          <Container children={children} />
        </div>
      </div>
      <div className={cx('footer')}>
        <Footer />
      </div>
    </div>
  );
}

export default DefaulLayOut;
