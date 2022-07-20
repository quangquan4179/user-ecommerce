import axiosInstance from './custom_axios';

export const getAllProduct = async() => {
  const res = await axiosInstance.get('/api/product/all');
    return res.data
}

