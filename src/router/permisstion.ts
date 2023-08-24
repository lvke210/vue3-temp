import useUserStore from '@/store/modules/user';
import pinia from '@/store';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import router from '@/router';
const userStore = useUserStore(pinia);

router.beforeEach(async (to, from, next) => {
  nprogress.start();
  const token = userStore.token;
  if (token) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      if (userStore.username) {
        next();
      } else {
        try {
          await userStore.userInfo();
          next();
        } catch (error) {
          userStore.userLogout();
          next({ path: '/longin', query: { redirect: to.path } });
        }
      }
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.path } });
    }
  }
});

router.afterEach((to, from) => {
  document.title = 'admin-' + to.meta.title;
  nprogress.done();
});
