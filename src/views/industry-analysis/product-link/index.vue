<template>
  <div class="container">
    <Breadcrumb :items="['menu.industryAnalysis', 'menu.industryAnalysis.productLink']" />
    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card class="general-card" :title="$t('menu.industryAnalysis.productLink')">
          <a-row justify="space-between">
            <a-col :span="24">
              <a-tabs :default-active-tab="1" type="rounded">
                <a-tab-pane key="1" :title="$t('menu.industryAnalysis.newEnergy')">
                  <NewEnergy />
                </a-tab-pane>
                <a-tab-pane key="2" :title="$t('menu.industryAnalysis.newMaterial')">
                  <NewMaterial />
                </a-tab-pane>
                <a-tab-pane key="3" :title="$t('menu.industryAnalysis.highEndEquipment')">
                  <HighEndEquipment />
                </a-tab-pane>
              </a-tabs>
            </a-col>
            <a-select
              style="width: 240px; position: absolute; top: 60px; right: 560px"
              placeholder="请选择企业阶段"
              allow-clear
            >
              <a-option>初创期</a-option>
              <a-option>成长期</a-option>
              <a-option>培育期</a-option>
              <a-option>上市公司</a-option>
              <a-option>巨头公司</a-option>
            </a-select>
            <a-cascader
              :options="options"
              style="width: 240px; position: absolute; top: 60px; right: 280px"
              placeholder="请选择地区"
            />
            <a-input-search
              :placeholder="$t('cardList.searchInput.placeholder')"
              style="width: 240px; position: absolute; top: 60px; right: 20px"
            />
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import NewEnergy from './new-energy.vue';
import NewMaterial from './new-material.vue';
import HighEndEquipment from './high-end-equipment.vue';

const options = [
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'xuanwu',
            label: '玄武区',
          },
          {
            value: 'qinhuai',
            label: '秦淮区',
          },
        ],
      },
      {
        value: 'suzhou',
        label: '苏州',
        children: [
          {
            value: 'gusu',
            label: '姑苏区',
          },
          {
            value: 'wuzhong',
            label: '吴中区',
          },
        ],
      },
    ],
  },
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          {
            value: 'xihu',
            label: '西湖区',
          },
          {
            value: 'shangcheng',
            label: '上城区',
          },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [
          {
            value: 'haishu',
            label: '海曙区',
          },
          {
            value: 'jiangbei',
            label: '江北区',
          },
        ],
      },
    ],
  },
];
</script>

<script lang="ts">
export default {
  name: 'Card',
};
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
