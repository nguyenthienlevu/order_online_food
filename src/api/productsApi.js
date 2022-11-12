import axiosClient from './axiosClient';

const productsApi = {
  getAll: (params) => {
    const url = '/best-foods';
    return axiosClient.get(url, { params });
  },
  getProduct: (id) => {
    return axiosClient.get(`/best-foods/${id}`);
  },
  // getTopRatedProducts: () => {
  //   return axiosClient.get('/api/products/topRated');
  // },
};

export default productsApi;
