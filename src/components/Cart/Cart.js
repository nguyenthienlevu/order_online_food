import {
  faCircleXmark,
  faTrashArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('cart')}>
        <span className={cx('close')}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
        <div className={cx('product')}>
          <div className={cx('product-item')}>
            <img
              className={cx('img')}
              src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
              alt=""
            />

            <div className={cx('description')}>
              <div className={cx('name')}>Banh gao</div>
              <div className={cx('quantity')}>
                <span className={cx('reduce')}>-</span>
                <span className={cx('number')}>1</span>
                <span className={cx('next')}>+</span>
              </div>
            </div>

            <span className={cx('price')}>123.000đ</span>

            <buton className={cx('delete-product')}>
              <FontAwesomeIcon icon={faTrashArrowUp} />
            </buton>
          </div>
        </div>

        <div className={cx('product')}>
          <div className={cx('product-item')}>
            <img
              className={cx('img')}
              src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
              alt=""
            />

            <div className={cx('description')}>
              <div className={cx('name')}>Banh gao</div>
              <div className={cx('quantity')}>
                <span className={cx('reduce')}>-</span>
                <span className={cx('number')}>1</span>
                <span className={cx('next')}>+</span>
              </div>
            </div>

            <span className={cx('price')}>123.000đ</span>

            <buton className={cx('delete-product')}>
              <FontAwesomeIcon icon={faTrashArrowUp} />
            </buton>
          </div>
        </div>

        <div className={cx('product')}>
          <div className={cx('product-item')}>
            <img
              className={cx('img')}
              src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
              alt=""
            />

            <div className={cx('description')}>
              <div className={cx('name')}>Banh gao</div>
              <div className={cx('quantity')}>
                <span className={cx('reduce')}>-</span>
                <span className={cx('number')}>1</span>
                <span className={cx('next')}>+</span>
              </div>
            </div>

            <span className={cx('price')}>123.000đ</span>

            <buton className={cx('delete-product')}>
              <FontAwesomeIcon icon={faTrashArrowUp} />
            </buton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
