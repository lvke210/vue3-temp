<template>
  <div class="logo-wrap">
    <svg-icon name="house" width="48px" height="48px"></svg-icon>
    <h1 v-if="settingStore.isFold">VUE3 Template</h1>
  </div>
</template>

<script setup lang="ts">
import useSettingStore from '@/store/modules/setting';
const settingStore = useSettingStore();
</script>

<style lang="scss" scoped>
.logo-wrap {
  display: flex;
  justify-content: center;
  h1 {
    line-height: 48px;
  }
}
</style>
