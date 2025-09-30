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

  <CTable :tableData="tableData" :columnList="columnList">
    <template #header-Shift="{ scope }">
      <div class="text-[red] text-[24px] font-bold">
        {{ scope.item.label }}
      </div>
    </template>

    <template #Shift="{ scope }">
      <div class="text-[red] text-[24px] font-bold">
        {{ scope.row.Shift }}
      </div>
      <div>{{ scope.row.customerName }}</div>
    </template>
  </CTable>
</template>

<script setup lang="ts">
import { useCounter } from '@monorepo/hook'
import { CTable } from '@monorepo/ui'
import { getMapToArray } from '@monorepo/utils'
import { ref } from 'vue'

const { count, increment, decrement, reset } = useCounter(5)

const value = ref('测试 vue3')

const nameMap = {
  a: { id: 1, name: '张三' },
  b: { id: 2, name: '李四' },
}

const arrayData = ref(getMapToArray(nameMap, 'code'))

const tableData = [
  {
    ProductId: '001',
    ProductionDateTime: new Date(),
    Shift: 1,
    Operator: '003',
    Passed: true,
  },
]
const columnList = [
  {
    label: '产品编号',
    prop: 'ProductId',
    width: '130px',
  },
  {
    label: '生产时间',
    prop: 'ProductionDateTime',
    sortable: true,
  },
  {
    label: '班次',
    prop: 'Shift',
  },
  {
    label: '操作员',
    prop: 'Operator',
  },
  {
    label: '检测结果',
    prop: 'Passed',
  },
  {
    label: '操作',
    prop: 'Operation',
  },
]
</script>

<style scoped></style>
