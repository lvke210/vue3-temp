<template>
  <div
    class="layout-container"
    :class="settingStore.isFold ? '' : 'layout-fold'"
  >
    <div class="layout-slider">
      <logo />
      <el-menu
        :default-active="route.path"
        :collapse="!settingStore.isFold"
        class="cus-el-menu"
      >
        <Menu :menuList="useStore.menuRoutes"></Menu>
      </el-menu>
    </div>
    <div class="main-wraper">
      <div class="layout-tabbar">
        <tab-bar></tab-bar>
      </div>
      <div class="layout-main">
        <Main />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from './logo/index.vue';
import Menu from './menu/index.vue';
import Main from './Main/index.vue';
import TabBar from './tab-bar/index.vue';
import useUserStore from '@/store/modules/user';
// 获取路由对象
import { useRoute } from 'vue-router';
import useSettingStore from '@/store/modules/setting';
const settingStore = useSettingStore();
const route = useRoute();
const useStore = useUserStore();
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100vh;
  display: flex;
  .layout-slider {
    width: 260px;
    overflow: hidden;
    transition: all 0.3s;
    border-right: 1px solid #d5d5d5;
  }
  .main-wraper {
    display: flex;
    flex-direction: column;
    flex: 1;

    .layout-tabbar {
      height: 50px;
      // padding: 15px;
      display: flex;
      align-items: center;
    }
    .layout-main {
      flex: 1;
      padding: 15px;
      background: rgb(197, 249, 243);
    }
  }
  .cus-el-menu {
  }
}
.layout-fold {
  .layout-slider {
    width: 50px;
  }
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
