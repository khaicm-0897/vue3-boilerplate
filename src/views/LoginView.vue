<template>
  <a-form
    :model="formLoginState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="email"
      name="email"
      :validate-status="emailError ? 'error' : ''"
      :help="emailError"
      has-feedback
      :rules="[
        { required: true, message: 'Please input your email!', trigger: 'blur' },
        { type: 'email', message: 'Please enter a valid email!', trigger: ['blur', 'change'] },
      ]"
    >
      <a-input v-model:value="formLoginState.email" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :validate-status="passwordError ? 'error' : ''"
      :help="passwordError"
      has-feedback
      :rules="[
        { required: true, message: 'Please input your password!' },
        {
          min: 6,
          message: 'Password must be at least 6 characters long',
          trigger: ['blur', 'change'],
        },
      ]"
    >
      <a-input-password v-model:value="formLoginState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formLoginState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import type { FormLoginState } from '@/types/User';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const emailError = ref<string | null>(null);
const passwordError = ref<string | null>(null);
const formLoginState = reactive<FormLoginState>({
  email: '',
  password: '',
  remember: true,
});

const userStore = useUserStore();
const router = useRouter();

const onFinish = async (values: FormLoginState) => {
  await userStore.login(values);
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>
