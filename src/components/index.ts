import SvgIcon from '@/components/svg-icon/index.vue';
// 引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
export default {
  install(app) {
    const components = { SvgIcon };
    Object.keys(components).forEach((compName) => {
      app.component(compName, components[compName]);
    });
    // 将element-plus提供图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
