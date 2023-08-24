import request from '@/utils/request';
import { loginForm } from './type';

enum API {
  LOGIN_URL = '/user/login',
  LOGIN_INFO_URL = '/user/info',
}

export const reqLogin = (data: loginForm) => request.post(API.LOGIN_URL, data);
export const reqUserInfo = () => request.get(API.LOGIN_INFO_URL);
