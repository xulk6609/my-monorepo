<script setup lang="ts">

import { ref } from 'vue'

const value = ref('测试 vue3')
</script>

<template>
  <p>
   {{ value }}
   <el-button>测试使用element plus 组件</el-button>
  </p>
</template>

<style scoped></style>
