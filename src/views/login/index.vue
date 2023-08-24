<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          ref="loginFormRef"
          :rules="rules"
          class="login-form"
          label-position="right"
          label-width="100px"
          :model="formData"
          style="max-width: 460px"
        >
          <h1>hello</h1>
          <h2>welcome to admin</h2>
          <el-form-item label="username" prop="username">
            <el-input
              v-model="formData.username"
              :prefix-icon="User"
              placeholder="input your username"
            />
          </el-form-item>
          <el-form-item label="passworld" prop="password">
            <el-input
              v-model="formData.password"
              type="password"
              :prefix-icon="Lock"
              placeholder="input you password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="login-btn"
              @click="loginFn"
              :loading="isLoading"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { User, Lock } from '@element-plus/icons-vue';
import useUserStore from '@/store/modules/user';
import { ElMessage } from 'element-plus';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const useStore = useUserStore();
const formData = reactive({
  username: '',
  password: '',
});
const loginFormRef = ref(null);
let isLoading = ref(false);
const loginFn = async () => {
  isLoading.value = true;
  try {
    await loginFormRef.value.validate();
    await useStore.login(formData);
    const redirect: any = route.query.redirect || '/';
    router.push({ path: redirect });
    ElMessage({
      type: 'success',
      message: 'login success',
    });
  } catch (error) {
    ElMessage({
      type: 'error',
      message: error.message || 'message error',
    });
  }
  isLoading.value = false;
  // console.log(formData);
};
const rules = reactive({
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' },
    { min: 3, max: 15, message: 'Length should be 3 to 15', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input username', trigger: 'blur' },
    { min: 3, max: 15, message: 'Length should be 3 to 15', trigger: 'blur' },
  ],
});
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background: #0088bad4;
  h1,
  h2 {
    color: #fff;
    margin-left: 20px;
  }
  h1 {
    font-size: 36px;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
.login-form {
  width: 80%;
  margin: 200px 100px;
  padding: 20px;
  border-radius: 5px;
  background: #00bbff;
}
.login-btn {
  width: 100%;
}
</style>
