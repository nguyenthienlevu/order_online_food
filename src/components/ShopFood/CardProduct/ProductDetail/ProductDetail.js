import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  faCartPlus,
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import productsApi from '~/api/productsApi';
import Button from '../../../Button/Button';
import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

function ProductDetail() {
  const [product, setProduct] = useState('');
  const param = useParams();
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productsApi.getProduct(param.id);
        setProduct(response);
      } catch {
        console.log('loi');
      }
    };
    fetchProductList();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('detail')}>
        <img className={cx('img')} src={product.img} alt="" />
        <div className={cx('element')}>
          <h1 className={cx('name')}>{product.name}</h1>

          <div className={cx('flex')}>
            <span className={cx('star')}>4sao</span>
            <span className={cx('evaluate')}>62 luot danh gia</span>
            <span className={cx('sell')}>125 luot ban</span>
          </div>

          <div className={cx('price')}>{product.price}$</div>
          <div className={cx('shop-discount')}>
            <h2 className={cx('title')}>Mã giảm giá của shop</h2>
            <span className={cx('promissory-note')}>80% GIẢM</span>
          </div>

          <div className={cx('delivery')}>
            <span className={cx('heading')}>Vận Chuyển</span>
            <div className={cx('specifically')}>
              <span className="fz14">Miễn phí vận chuyển</span>
              <div className={cx('transport')}>
                <span className={cx('heading')}>Vận Chuyển tới</span>
                <p className={cx('fz14')}>phường Phước Vĩnh, ThànH Phố Huế</p>
              </div>

              <div className={cx('transport')}>
                <span className={cx('heading')}>Phí Vận Chuyển</span>
                <div className={cx('fz14')}>123.000đ</div>
              </div>
            </div>
          </div>

          <div className={cx('product')}>
            <div className={cx('amount')}>
              <span className={cx('prev')}>
                <FontAwesomeIcon icon={faChevronCircleLeft} />
              </span>
              <span className={cx('number')}>1</span>
              <span className={cx('next')}>
                <FontAwesomeIcon icon={faChevronCircleRight} />
              </span>
            </div>
            <h4 className={cx('available')}>48 sản phẩm có sẵn</h4>
          </div>

          <div className={cx('buy')}>
            <Button danger icon={<FontAwesomeIcon icon={faCartPlus} />}>
              Thêm vào giỏ hàng
            </Button>
            <Button outline>mua ngay</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
