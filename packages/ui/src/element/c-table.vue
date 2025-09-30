<template>
  <el-table :data="tableData" v-loading="loading" v-bind="{ ...$attrs }">
    <el-table-column v-for="(item, index) in columnList" :key="index" v-bind="item">
      <template #header="scope">
        <slot :name="'header-' + item.prop" :scope="{ ...scope, item }">
          <span>{{ item.label }}</span>
        </slot>
      </template>

      <template #default="scope">
        <slot :name="item.prop" :scope="scope" v-if="!types.includes(item.type)">
          <span>{{ scope.row[item.prop] }}</span>
        </slot>
      </template>
    </el-table-column>
    <template #empty>
      <div class="table-empty">
        <p>
          <el-image :src="emptyImg" style="width: 100%; height: 100%" fit="contain" />
        </p>
        <p>There is no content yet. Go and check the balance.</p>
      </div>
    </template>
  </el-table>
</template>

<script setup lang="ts">
import emptyImg from '../assets/imgs/emptydata.png'

defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
  columnList: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const types = ['selection', 'index', 'expand']
</script>

<style lang="scss" scoped></style>
