import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ShopFood.module.scss';
import productsApi from '~/api/productsApi';
import CardProduct from './CardProduct/CardProduct';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function ShopFood() {
  const [getProducts, setGetProducts] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productsApi.getAll(params);
        setGetProducts(response);
      } catch {
        console.log('loi');
      }
    };
    fetchProductList();
  }, []);

  return (
    <div className={cx('home-product')}>
      {getProducts.length > 0 ? (
        getProducts.map((data, index) => (
          <CardProduct
            key={index}
            id={data.id}
            img={data.img}
            name={data.name}
            description={data.dsc}
            price={data.price}
          />
        ))
      ) : (
        <img className={cx('no-found')} src={images.noFound} alt="" />
      )}
    </div>
  );
}

export default ShopFood;
