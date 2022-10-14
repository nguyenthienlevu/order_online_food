import { useState } from 'react';
import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import MenuCart from './MenuCart';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Cart() {
  const [showProduct, setShowProduct] = useState(0);

  return (
    <MenuCart>
      <div className={cx('cart')}>
        {showProduct > 0 ? (
          <div className={cx('product')}>
            <h1 className={cx('title')}>Sản phẩm mới thêm</h1>
            <div className={cx('product-item')}>
              <img
                className={cx('img')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
              <div className={cx('description')}>
                <div className={cx('name')}>
                  banh gao chocopie thom ngon bi duong doi dao suc khoe
                </div>
                <div className={cx('pri-del')}>
                  <span className={cx('price')}>123.000đ</span>
                  <buton className={cx('delete-product')}>
                    <FontAwesomeIcon icon={faTrashArrowUp} />
                  </buton>
                </div>
              </div>
            </div>

            <div className={cx('product-item')}>
              <img
                className={cx('img')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
              <div className={cx('description')}>
                <div className={cx('name')}>
                  banh gao chocopie thom ngon bi duong doi dao suc khoe
                </div>
                <div className={cx('pri-del')}>
                  <span className={cx('price')}>123.000đ</span>
                  <buton className={cx('delete-product')}>
                    <FontAwesomeIcon icon={faTrashArrowUp} />
                  </buton>
                </div>
              </div>
            </div>

            <div className={cx('product-item')}>
              <img
                className={cx('img')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
              <div className={cx('description')}>
                <div className={cx('name')}>
                  banh gao chocopie thom ngon bi duong doi dao suc khoe
                </div>
                <div className={cx('pri-del')}>
                  <span className={cx('price')}>123.000đ</span>
                  <buton className={cx('delete-product')}>
                    <FontAwesomeIcon icon={faTrashArrowUp} />
                  </buton>
                </div>
              </div>
            </div>

            <div className={cx('product-item')}>
              <img
                className={cx('img')}
                src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
                alt=""
              />
              <div className={cx('description')}>
                <div className={cx('name')}>
                  banh gao chocopie thom ngon bi duong doi dao suc khoe
                </div>
                <div className={cx('pri-del')}>
                  <span className={cx('price')}>123.000đ</span>
                  <buton className={cx('delete-product')}>
                    <FontAwesomeIcon icon={faTrashArrowUp} />
                  </buton>
                </div>
              </div>
            </div>

            <div className={cx('btn')}>
              <h4 className={cx('Product-number')}>11 sản phẩm đã thêm vào</h4>
              <button className={cx('btn-more')}>xem giỏ hàng</button>
            </div>
          </div>
        ) : (
          <div className={cx('no-product')}>
            <h2 className={cx('heading')}>Không có sản phẩm nào</h2>
            <img
              className={cx('img-no-product')}
              src={images.noProduct}
              alt=""
            ></img>
          </div>
        )}
      </div>
    </MenuCart>
  );
}

export default Cart;
