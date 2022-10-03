import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import Container from '~/Layouts/DefaulLayOut/Container';
import Footer from '~/Layouts/DefaulLayOut/Footer';
import Header from '~/Layouts/DefaulLayOut/Header';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default Home;
