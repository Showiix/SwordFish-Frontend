<!-- 语言切换组件 -->
<template>
  <el-dropdown @command="handleLanguageChange" trigger="click">
    <!-- 触发器：地球图标 + 当前语言 -->
    <div class="language-switcher">
      <span class="globe-icon">🌐</span>
      <span class="language-text">{{ currentLanguageLabel }}</span>
      <el-icon class="arrow-icon"><ArrowDown /></el-icon>
    </div>

    <!-- 下拉菜单 -->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          command="zh-CN"
          :class="{ 'is-active': locale === 'zh-CN' }"
        >
          <span class="flag">🇨🇳</span>
          <span>简体中文</span>
        </el-dropdown-item>
        <el-dropdown-item
          command="en-US"
          :class="{ 'is-active': locale === 'en-US' }"
        >
          <span class="flag">🇺🇸</span>
          <span>English</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ArrowDown } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import type { Language } from '@/locales'

// 获取 i18n 实例
const { locale } = useI18n()

// 当前语言的显示文本
const currentLanguageLabel = computed(() => {
  return locale.value === 'zh-CN' ? '中文' : 'English'
})

// 切换语言
const handleLanguageChange = (lang: Language) => {
  if (lang === locale.value) return // 如果是当前语言，不做处理

  // 更新语言
  locale.value = lang

  // 保存到本地存储
  localStorage.setItem('language', lang)

  // 提示用户
  const message = lang === 'zh-CN' ? '已切换到简体中文' : 'Switched to English'
  ElMessage.success(message)
}
</script>

<style scoped lang="scss">
.language-switcher {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  padding: $spacing-sm $spacing-md;
  cursor: pointer;
  border-radius: $border-radius-md;
  transition: $transition-base;

  &:hover {
    background: $bg-secondary;
  }

  .globe-icon {
    font-size: 20px;
    line-height: 1;
  }

  .language-text {
    font-size: 14px;
    color: $text-primary;
    font-weight: 500;
  }

  .arrow-icon {
    font-size: 12px;
    color: $text-secondary;
    transition: transform 0.3s ease;
  }
}

:deep(.el-dropdown-menu__item) {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-sm $spacing-lg;

  .flag {
    font-size: 18px;
  }

  &.is-active {
    color: $primary-color;
    background: $primary-light;
    font-weight: 600;
  }
}
</style>
