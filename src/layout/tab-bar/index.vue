<template>
  <div class="tab-bar">
    <div class="left">
      <div @click="foldOrExpland" style="padding-right: 10px">
        <el-icon>
          <component :is="settingStore.isFold ? 'Fold' : 'Expand'"></component>
        </el-icon>
      </div>
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(item, index) in routes.matched"
            :key="item.path"
            :to="item.path"
            v-show="item.meta.title"
          >
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="right">
      <el-button
        size="small"
        icon="Refresh"
        circle
        @click="refresh"
      ></el-button>
      <el-button
        size="small"
        icon="FullScreen"
        circle
        @click="fullScreen"
      ></el-button>
      <el-button
        size="small"
        icon="Setting"
        circle
        @click="setting"
      ></el-button>

      <el-avatar :size="30" :src="userStore.avatar" />
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided @click="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '../../assets/images/avat.png';
import useSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';
import { useRoute, useRouter } from 'vue-router';

const routes = useRoute();
const router = useRouter();
const settingStore = useSettingStore();
const userStore = useUserStore();
const foldOrExpland = () => {
  settingStore.isFold = !settingStore.isFold;
  localStorage.setItem('isFold', JSON.stringify(settingStore.isFold));
};

const refresh = () => {
  settingStore.refresh = !settingStore.refresh;
};
const fullScreen = () => {
  let isFull = document.fullscreenElement;
  if (!isFull) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

const setting = () => {};
const logout = () => {
  router.push({ path: '/login', query: { redirect: routes.path } });
  userStore.userLogout();
  localStorage.removeItem('TOKEN');
};
</script>

<style lang="scss" scoped>
.tab-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.left,
.right {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 15px;
  }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
