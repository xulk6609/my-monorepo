<script setup lang="ts">
import { getMapToArray } from '@monorepo/utils'
import { useCounter } from '@monorepo/hook'
import { ref } from 'vue'

const { count, increment, decrement, reset } = useCounter(5)

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
  <div>
    <p>计数：{{ count }}</p>
    <el-button @click="increment">增加</el-button>
    <el-button @click="decrement">减少</el-button>
    <el-button @click="reset">重置</el-button>
  </div>
</template>

<style scoped></style>
