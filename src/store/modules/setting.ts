import { defineStore } from 'pinia';

const useSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      isFold: JSON.parse(localStorage.getItem('isFold') || 'true'),
      refresh: false,
    };
  },
});

export default useSettingStore;
