<script setup lang="ts">
import { ref } from 'vue'

const value = ref('测试 vue3')
</script>

<template>
  <p>
   {{ value }}
  </p>
</template>

<style scoped></style>
