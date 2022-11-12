import classNames from 'classnames/bind';
import propTypes from 'prop-types';
import Banner from '~/components/Banner';
import Slider from '~/components/Slider';
import Container from '~/Layouts/DefaulLayOut/Container';
import Footer from '~/Layouts/DefaulLayOut/Footer';
import Header from '~/Layouts/DefaulLayOut/Header';
import CardIntroduce from '~/components/CardIntroduce';
import images from '~/assets/images';
import styles from './Home.module.scss';
import { dataIntroduce } from '~/constants/dataIntroduce';
import { dataBlog } from '~/constants/dataBlog';
import CardProduct from '~/components/ShopFood/CardProduct/CardProduct';
import ShopFood from '~/components/ShopFood';
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <ShopFood />
      {/* <Banner /> */}
      {/* <Slider /> */}
      {/* <Container /> */}
      {/* <Footer /> */}
      {/* <div className={cx('demo')}>
        {dataIntroduce.map((data, index) => {
          return (
            <CardIntroduce
              w150
              key={index}
              img={data.img}
              title={data.title}
              paragraph={data.paragraph}
            />
          );
        })}
      </div> */}
      {/* <div className={cx('demo')}>
        {dataBlog.map((data, index) => {
          return (
            <CardIntroduce
              maxWith
              key={index}
              img={data.img}
              title={data.title}
              paragraph={data.paragraph}
              buton="Apply Now"
              boxShadow
            />
          );
        })}
      </div> */}
      {/* <div className={cx('demo')}>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
