import axiosClient from './axiosClient';

const productsApi = {
  getAllProducts: (keyword, pageNumber, category) => {
    return axiosClient.get(
      `/api/products?keyword=${keyword}&category=${category}&pageNumber=${pageNumber}`
    );
  },
  getProduct: (id) => {
    return axiosClient.get('/api/products/' + id);
  },
  getTopRatedProducts: () => {
    return axiosClient.get('/api/products/topRated');
  },
};

export default productsApi;
