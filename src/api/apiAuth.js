import axiosInstance from './custom_axios';

export const login = async (email, password) => {
    const res = await axiosInstance.post('/api/auth/login', {email, password});
    return res.data;
}