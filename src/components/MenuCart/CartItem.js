import { faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './MenuCart.module.scss';

const cx = classNames.bind(styles);

function CartItem() {
  return (
    <div className={cx('cart')}>
      <div className={cx('product')}>
        <div className={cx('product-item')}>
          <img
            className={cx('img')}
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
            alt=""
          />

          <div className={cx('name')}>
            banh gao chocopie thom ngon bi duong doi dao suc khoe
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

          <div className={cx('name')}>Banh gao</div>

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

          <div className={cx('name')}>Banh gao</div>

          <span className={cx('price')}>123.000đ</span>

          <buton className={cx('delete-product')}>
            <FontAwesomeIcon icon={faTrashArrowUp} />
          </buton>
        </div>
      </div>
      <div className={cx('btn')}>
        <button className={cx('btn-more')}>Xem gio hang</button>
      </div>
    </div>
  );
}

export default CartItem;
