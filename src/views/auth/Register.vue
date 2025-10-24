<template>
  <div class="register-page">
    <div class="container">
      <div class="register-card">
        <h1>注册</h1>
        <p>功能开发中...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 注册页面
</script>

<style scoped lang="scss">
.register-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - $header-height);
  padding: $spacing-xl 0;
}

.register-card {
  max-width: 500px;
  width: 100%;
  padding: $spacing-2xl;
  background: white;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-lg;

  h1 {
    text-align: center;
    margin-bottom: $spacing-xl;
  }
}
</style>

