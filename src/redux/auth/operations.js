import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const apiRegisterUser = createAsyncThunk(
  'users/registerUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post('./users/signup', formData);
      return data;
    } catch (error) {}
  }
);
