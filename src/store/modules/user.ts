import { reqLogin, reqUserInfo } from '@/api/user';
import { defineStore } from 'pinia';
import { routes } from '@/router/route';
let useUserStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'),
      menuRoutes: routes,
      avatar: '',
      username: '',
    };
  },
  actions: {
    async login(formData) {
      const { code, data } = await reqLogin(formData);

      if (code === 200) {
        this.token = data.token;
        localStorage.setItem('TOKEN', data.token);
        return 'success';
      } else {
        return Promise.reject(new Error(data.message));
      }
    },

    async userInfo() {
      const { data, code } = await reqUserInfo();
      if (data && code === 200) {
        this.avatar = data.checkUser.avatar;
        this.username = data.checkUser.username;
        return 'success';
      } else {
        return Promise.reject(new Error('get userInfo failed'));
      }
    },
    async userLogout() {
      this.avatar = '';
      this.username = '';
      this.token = '';
    },
  },
  getters: {},
});

export default useUserStore;
