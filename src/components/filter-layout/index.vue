<template>
  <div>
    <a-descriptions :column="1">
      <a-descriptions-item v-for="(item, index) of data" :key="index" :label="item.label">
        <a-space v-if="item.component === 'Select'">
          <a-tag size="large" checkable color="arcoblue" :default-checked="true"> 全部 </a-tag>
          <a-select :placeholder="`请选择${item.label}`"> </a-select>
        </a-space>
        <a-space v-else>
          <a-tag
            v-for="(childItem, childIndex) of item.dataSource"
            :key="childIndex"
            size="large"
            checkable
            color="arcoblue"
            :default-checked="childIndex === 0"
          >
            {{ childItem.label }}
          </a-tag>
        </a-space>
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';

defineProps({
  data: {
    type: Array as PropType<
      Array<{
        label: string;
        value: string | number;
        dataSource: Array<{ label: string; value: string | number }>;
        component: string;
      }>
    >,
    default: () => {
      return [];
    },
  },
});
</script>

<style scoped lang="less"></style>
