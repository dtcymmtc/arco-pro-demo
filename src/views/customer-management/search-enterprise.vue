<template>
  <div class="container">
    <Breadcrumb :items="['menu.customerManagement', 'menu.customerManagement.searchEnterprise']" />
    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card class="general-card" :title="$t('menu.customerManagement.searchEnterprise')">
          <a-space>
            <a-input-search
              :style="{ width: '600px' }"
              placeholder="请输入企业的名称"
              search-button
              size="large"
            >
              <template #button-icon>
                <icon-search />
              </template>
              <template #button-default> 搜一搜 </template>
            </a-input-search>
          </a-space>
          <a-divider />
          <FilterLayout :data="filterData"></FilterLayout>
          <a-divider />
          <a-row style="margin-bottom: 16px">
            <a-col :span="12">
              <a-space>
                <a-button>编辑</a-button>
                <a-button>导出</a-button>
                <a-button>刷新列表</a-button>
              </a-space>
            </a-col>
          </a-row>
          <EnterpriseList />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import FilterLayout from '@/components/filter-layout/index.vue';
import EnterpriseList from '@/components/enterprise-list/index.vue';

const filterData = [
  {
    label: '所在地区',
    value: 'key1',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '江苏省', value: '江苏省' },
      { label: '浙江省', value: '浙江省' },
      { label: '广东省', value: '广东省' },
      { label: '山东省', value: '山东省' },
      { label: '河南省', value: '河南省' },
      { label: '四川省', value: '四川省' },
      { label: '湖北省', value: '湖北省' },
      { label: '湖南省', value: '湖南省' },
      { label: '福建省', value: '福建省' },
      { label: '安徽省', value: '安徽省' },
      { label: '北京市', value: '北京市' },
      { label: '上海市', value: '上海市' },
      { label: '天津市', value: '天津市' },
      { label: '重庆市', value: '重庆市' },
      { label: '辽宁省', value: '辽宁省' },
    ],
  },
  {
    label: '所在行业',
    value: 'key2',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '信息技术', value: '信息技术' },
      { label: '制造业', value: '制造业' },
      { label: '金融业', value: '金融业' },
      { label: '教育', value: '教育' },
      { label: '医疗卫生', value: '医疗卫生' },
      { label: '建筑业', value: '建筑业' },
      { label: '零售业', value: '零售业' },
      { label: '餐饮业', value: '餐饮业' },
      { label: '旅游业', value: '旅游业' },
      { label: '能源业', value: '能源业' },
      { label: '环境保护', value: '环境保护' },
      { label: '电力供应', value: '电力供应' },
      { label: '交通运输', value: '交通运输' },
      { label: '文化娱乐', value: '文化娱乐' },
      { label: '房地产', value: '房地产' },
    ],
  },
  {
    label: '企业阶段',
    value: 'key3',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '初创期', value: 'key2' },
      { label: '成长期', value: 'key3' },
      { label: '培育期', value: 'key5' },
      { label: '上市公司', value: 'key6' },
      { label: '公司巨头', value: 'key7' },
    ],
  },
  {
    label: '优质企业标签',
    value: 'key4',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '上市公司', value: 'key2' },
      { label: '高新技术企业', value: 'key3' },
      { label: '5亿以上营收', value: 'key5' },
      { label: '中国名企500强', value: 'key6' },
    ],
  },
  {
    label: '注册资本',
    value: 'key5',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '20万以下', value: 'key2' },
      { label: '20-50万', value: 'key3' },
      { label: '50-100万', value: 'key4' },
      { label: '100-200万', value: 'key5' },
      { label: '200-500万', value: 'key6' },
      { label: '500万以上', value: 'key7' },
    ],
  },
  {
    label: '联系方式',
    value: 'key6',
    dataSource: [
      { label: '全部', value: 'key1' },
      { label: '有手机', value: 'key2' },
      { label: '有固话', value: 'key3' },
      { label: '有邮箱', value: 'key4' },
      { label: '有QQ', value: 'key5' },
      { label: '无联系方式', value: 'key6' },
    ],
  },
];
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
