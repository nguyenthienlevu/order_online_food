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
const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Header />
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
    </div>
  );
}

export default Home;
