<template>
  <!-- <div>Login covvvvvmponent</div> -->
  <a-form layout="vertical" class="login-form">
    <a-form-item label="Email">
      <a-input type="email" placeholder="Enter your email" />
    </a-form-item>

    <a-form-item label="Password">
      <a-input-password placeholder="Enter your password" />
    </a-form-item>

    <a-form-item>
      <a-button type="primary" htmlType="submit" class="login-form-button"> Login </a-button>
    </a-form-item>
  </a-form>
</template>
