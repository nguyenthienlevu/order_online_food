import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import styles
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import 'swiper/scss';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const cx = classNames.bind(styles);
function Slider() {
  return (
    <section className={cx('category')}>
      <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={30}
        // Navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cx('card')}>
            <div className={cx('card-background')}>
              <div className={cx('description')}>
                <h2 className={cx('name')}>Pizza</h2>
                <h3 className={cx('country')}>Stating</h3>
                <h3 className={cx('price')}>$900</h3>
              </div>

              <img
                className={cx('img-product')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
