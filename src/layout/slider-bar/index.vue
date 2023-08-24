<template>
  <el-scrollbar height="max-content" class="scrollbar">
    <el-menu>
      <template v-for="(item, index) in menuList" :key="item.path">
        <el-menu-item v-if="!item.children" :index="item.path">
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
        <el-menu-item
          v-if="item.children?.length === 1"
          :index="item.children[0].path"
        >
          <span>{{ item.children[0].meta.title }}</span>
        </el-menu-item>
        <el-sub-menu v-if="item.children?.length > 1" :index="item.path">
          <template #title>{{ item.meta.title }}</template>
          <slider-bar :menu-list="item.children"></slider-bar>
        </el-sub-menu>
      </template>
      <!-- <el-menu-item index="1">首页 </el-menu-item>
      <el-menu-item index="2">首页211 </el-menu-item>
      <el-sub-menu index="3" title="首页333">
        <template #title> 首页3334 </template>
        <el-menu-item index="3-1">111 </el-menu-item>
        <el-menu-item index="3-2">222 </el-menu-item>
        <el-menu-item index="3-3">333 </el-menu-item>
      </el-sub-menu> -->
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
defineProps({
  menuList: {
    type: Array<any>,
    default: () => [],
  },
});
</script>
<script lang="ts">
export default {
  name: 'SliderBar',
};
</script>

<style scoped>
.el-sub-menu {
  .scrollbar {
    width: 100%;
    padding-left: 20px;
    .el-menu {
      border-right: none;
    }
  }
}
</style>
