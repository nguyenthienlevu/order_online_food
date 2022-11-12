import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cart, Heart, Share } from '../../Icon';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './CardProduct.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function CardProduct({
  id,
  img,
  noImg = images.noImage,
  name,
  description,
  price,
}) {
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);

  const handleNavigate = () => {
    navigate(`/cart/${id}`);
  };

  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('img')}
        src={img || noImg}
        alt=""
        onClick={handleNavigate}
      />
      <div className={cx('evaluate')}>
        <span className={cx('star')}>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className={cx('star')}>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className={cx('star')}>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className={cx('star')}>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className={cx('star')}>
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className={cx('star')}>
          <FontAwesomeIcon icon={faStar} />
        </span>
      </div>
      <h1 className={cx('name')}>{name}</h1>
      <p className={cx('description')}>{description}</p>
      <div className={cx('footer')}>
        <span className={cx('price')}>${price}</span>
        <div className={cx('like')}>
          <span className={cx('heart')}>
            <Heart />
          </span>
          <span className={cx('share')}>
            <Share />
          </span>
        </div>
      </div>

      {/* cart */}
      <div className={cx('cart')}>
        <Cart />
      </div>
    </div>
  );
}

CardProduct.propTypes = {
  onClick: propTypes.func,
  img: propTypes.node,
  noImg: propTypes.node,
  name: propTypes.string,
  description: propTypes.string,
  price: propTypes.number,
};

export default CardProduct;
