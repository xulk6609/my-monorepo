<script setup lang="ts">
import { getMapToArray } from '@monorepo/utils'
import { ref } from 'vue'

const value = ref('测试 vue3')

const nameMap = {
  a: { id: 1, name: '张三' },
  b: { id: 2, name: '李四' },
}

const arrayData = ref(getMapToArray(nameMap, 'code'))

</script>

<template>
  <p>
   {{ value }}
   <el-button>测试使用element plus 组件</el-button>
  </p>
  <div>
    {{ arrayData }}
  </div>
</template>

<style scoped></style>
