import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const INDUSTRYANALYSIS: AppRouteRecordRaw = {
  path: '/industry-analysis',
  name: 'industryAnalysis',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.industryAnalysis',
    requiresAuth: true,
    icon: 'icon-tool',
    order: 3,
  },
  children: [
    {
      path: 'product-link',
      name: 'newMaterial',
      component: () => import('@/views/industry-analysis/product-link/index.vue'),
      meta: {
        locale: 'menu.industryAnalysis.productLink',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'intellectual-property',
      name: 'intellectualProperty',
      component: () => import('@/views/industry-analysis/intellectual-property.vue'),
      meta: {
        locale: 'menu.industryAnalysis.intellectualProperty',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'insight',
      name: 'insight',
      component: () => import('@/views/industry-analysis/insight.vue'),
      meta: {
        locale: 'menu.industryAnalysis.insight',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default INDUSTRYANALYSIS;
