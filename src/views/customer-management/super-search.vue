<template>
  <div class="container">
    <Breadcrumb :items="['menu.customerManagement', 'menu.customerManagement.superSearch']" />
    <a-row :gutter="20" align="stretch">
      <a-col :span="24">
        <a-card class="general-card" :title="$t('menu.customerManagement.superSearch')">
          <SuperSearch />
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
import SuperSearch from '@/components/super-search/index.vue';
import EnterpriseList from '@/components/enterprise-list/index.vue';
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
