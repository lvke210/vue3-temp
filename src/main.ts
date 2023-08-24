import { createApp } from 'vue';
import App from '@/App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
//svg 需要的配置代码
import 'virtual:svg-icons-register';
import GlobalComponents from '@/components';
import './styles/index.scss';
import router from '@/router';
import pinia from '@/store';
import '@/router/permisstion';

createApp(App)
  .use(router)
  .use(pinia)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(GlobalComponents)
  .mount('#app');
