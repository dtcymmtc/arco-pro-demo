<template>
  <div class="container">
    <Breadcrumb :items="['menu.customerManagement', 'menu.customerManagement.followUp']" />
    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card class="general-card" :title="$t('menu.customerManagement.followUp')">
          <FilterLayout :data="filterData"></FilterLayout>
          <a-divider />
          <a-row style="margin-bottom: 16px">
            <a-col :span="12">
              <a-space>
                <a-button>编辑</a-button>
                <a-button>转移</a-button>
                <a-button>导出</a-button>
                <a-button>发送短信</a-button>
                <a-button>刷新列表</a-button>
              </a-space>
            </a-col>
            <a-col :span="12" style="display: flex; align-items: center; justify-content: end">
              <a-input-group>
                <a-select
                  :options="['企业名称', '客户名称', '电话号码', '手机号码']"
                  :style="{ width: '120px' }"
                  default-value="企业名称"
                />
                <a-input-search
                  :style="{ width: '220px' }"
                  placeholder="请输入搜索内容"
                  search-button
                >
                  <template #button-icon>
                    <icon-search />
                  </template>
                </a-input-search>
              </a-input-group>
            </a-col>
          </a-row>
          <a-list>
            <a-list-item v-for="(item, index) in data" :key="index" style="width: 100%">
              <a-list-item-meta>
                <template #title>
                  <a-space>
                    <span>{{ item.name }}</span>
                    <a-tag>{{ item.type }}</a-tag>
                  </a-space>
                </template>
                <template #description> 跟进时间：{{ item.date }} </template>
                <template #avatar>
                  <a-avatar><IconUser /></a-avatar>
                </template>
              </a-list-item-meta>
              <template #actions>
                <icon-edit />
                <icon-delete />
              </template>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import Mock from 'mockjs';
import FilterLayout from '@/components/filter-layout/index.vue';

const rowSelection = {};

const filterData = [
  {
    label: '创建时间',
    value: 'key1',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '今天', value: 'key2' },
      { label: '昨天', value: 'key3' },
      { label: '本周', value: 'key4' },
      { label: '上周', value: 'key5' },
      { label: '本月', value: 'key6' },
      { label: '上月', value: 'key7' },
    ],
  },
  {
    label: '实际跟进时间',
    value: 'key2',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '今天', value: 'key2' },
      { label: '昨天', value: 'key3' },
      { label: '本周', value: 'key4' },
      { label: '上周', value: 'key5' },
      { label: '本月', value: 'key6' },
      { label: '上月', value: 'key7' },
    ],
  },
  {
    label: '跟进类型',
    value: 'key3',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '面访', value: 'key2' },
      { label: '微信', value: 'key3' },
      { label: '电话', value: 'key4' },
      { label: '拜访签到', value: 'key5' },
      { label: '电销', value: 'key6' },
      { label: '邀约', value: 'key7' },
      { label: '竞价', value: 'key7' },
    ],
  },
  {
    label: '所属部门',
    value: 'key4',
    component: 'Select',
  },
  {
    label: '负责人',
    value: 'key5',
    component: 'Select',
  },
];

const data = Mock.mock({
  'list|100': [
    {
      name: '@cname',
      phohe: '138****3237',
      date: '@datetime',
      'type|1': ['面访', '微信', '电话', '拜访签到', '电销', '邀约', '竞价'],
    },
  ],
}).list;
</script>

<style scoped lang="less">
.container {
  padding: 0 20px 20px 20px;
  :deep(.arco-list-content) {
    overflow-x: hidden;
  }

  :deep(.arco-card-meta-title) {
    font-size: 14px;
  }
}
:deep(.arco-list-col) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

:deep(.arco-list-item) {
  width: 33%;
}

:deep(.block-title) {
  margin: 0 0 12px 0;
  font-size: 14px;
}
:deep(.list-wrap) {
  // min-height: 140px;
  .list-row {
    align-items: stretch;
    .list-col {
      margin-bottom: 16px;
    }
  }
  :deep(.arco-space) {
    width: 100%;
    .arco-space-item {
      &:last-child {
        flex: 1;
      }
    }
  }
}
</style>
