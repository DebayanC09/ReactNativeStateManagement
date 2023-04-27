import axios, {AxiosInstance} from 'axios';
import * as AxiosLogger from 'axios-logger';
import {getUserData, storeUserData} from '../utils/Funtionality';
import {callRefreshToken} from './AxiosServices';
import {baseUrl} from '../utils/Endpoints';
import {UserModel} from '../models/UserModel';

const instance: AxiosInstance = axios.create({
  baseURL: baseUrl(),
  timeout: 10000,
});

instance.interceptors.request.use(async config => {
  let userdata: UserModel | null = await getUserData();
  if (userdata != null && userdata.token != null) {
    config.headers.Authorization = userdata.token;
  }
  return config;
});

instance.interceptors.response.use(
  response => response,
  async error => {
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      let result = await callRefreshToken();
      let userdata: UserModel | null = await getUserData();
      if (userdata != null) {
        userdata.token = result.token;
        await storeUserData(userdata);
      }
      error.config.headers.Authorization = result.token;
      return instance.request(error.config);
    }
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(
  AxiosLogger.requestLogger,
  AxiosLogger.errorLogger,
);

instance.interceptors.response.use(
  AxiosLogger.responseLogger,
  AxiosLogger.errorLogger,
);

export const AxiosClient: AxiosInstance = instance;
