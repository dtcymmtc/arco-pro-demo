<template>
  <div class="container">
    <Breadcrumb :items="['menu.customerManagement', 'menu.customerManagement.list']" />
    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card class="general-card" :title="$t('menu.customerManagement.list')">
          <a-tabs :default-active-tab="1" type="rounded">
            <a-tab-pane key="1" title="全部客户"></a-tab-pane>
            <a-tab-pane key="2" title="我的客户"></a-tab-pane>
            <a-tab-pane key="3" title="我协作的客户"></a-tab-pane>
            <a-tab-pane key="4" title="待审批的客户"></a-tab-pane>
          </a-tabs>
          <a-divider />
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
          <a-table :columns="columns" :data="data" :row-selection="rowSelection" />
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
    label: '跟进状态',
    value: 'key1',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '有意向加微信', value: 'key2' },
      { label: '空号，停机', value: 'key3' },
      { label: '无效客户', value: 'key4' },
      { label: '半年内', value: 'key5' },
      { label: '已成交', value: 'key6' },
      { label: '未接通', value: 'key7' },
    ],
  },
  {
    label: '客户类型',
    value: 'key2',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: 'A', value: 'key2' },
      { label: 'C', value: 'key3' },
      { label: 'F', value: 'key4' },
    ],
  },
  {
    label: '所属部门',
    value: 'key3',
    component: 'Select',
  },
  {
    label: '负责人',
    value: 'key4',
    component: 'Select',
  },
  {
    label: '线索来源',
    value: 'key5',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '招商宝线索', value: 'key2' },
      { label: '自有数据', value: 'key3' },
      { label: '其他公司数据', value: 'key4' },
      { label: '老客户介绍', value: 'key5' },
      { label: '更改函', value: 'key6' },
      { label: '客户介绍', value: 'key7' },
      { label: '微信', value: 'key8' },
    ],
  },
  {
    label: '创建时间',
    value: 'key6',
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
];

const columns = [
  {
    title: '客户姓名',
    dataIndex: 'key1',
  },
  {
    title: '手机号',
    dataIndex: 'key2',
  },
  {
    title: '跟进状态',
    dataIndex: 'key3',
  },
  {
    title: '线索来源',
    dataIndex: 'key4',
  },
  {
    title: '创建时间',
    dataIndex: 'key5',
  },
  {
    title: '负责人',
    dataIndex: 'key6',
  },
  {
    title: '最新跟进记录',
    dataIndex: 'key7',
  },
  {
    title: '渠道',
    dataIndex: 'key8',
  },
];

const data = Mock.mock({
  'list|100': [
    {
      key1: '@cname',
      key2: '138****3237',
      'key3|1': ['有意向加微信', '空号，停机', '无效客户', '半年内', '已成交', '未接通'],
      key4: '招商宝',
      key5: '@datetime',
      key6: '@cname',
      key7: '@datetime',
      'key8|1': [
        '全部',
        '无',
        '微信',
        'QQ',
        '微博',
        '百度',
        '头条',
        '腾讯',
        '直播',
        '小红书',
        '欧盟技术',
        '日本技术',
      ],
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
