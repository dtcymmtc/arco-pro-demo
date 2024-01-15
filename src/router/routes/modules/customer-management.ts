import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const CUSTOMERMANAGEMENT: AppRouteRecordRaw = {
  path: '/customer-management',
  name: 'customerManagement',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.customerManagement',
    requiresAuth: true,
    icon: 'icon-user',
    order: 4,
  },
  children: [
    {
      path: 'list',
      name: 'list',
      component: () => import('@/views/customer-management/list.vue'),
      meta: {
        locale: 'menu.customerManagement.list',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'clue',
      name: 'clue',
      component: () => import('@/views/customer-management/clue.vue'),
      meta: {
        locale: 'menu.customerManagement.clue',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'marketing-tool',
      name: 'marketingTool',
      component: () => import('@/views/customer-management/marketing-tool.vue'),
      meta: {
        locale: 'menu.customerManagement.marketingTool',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'follow-up',
      name: 'followUp',
      component: () => import('@/views/customer-management/follow-up.vue'),
      meta: {
        locale: 'menu.customerManagement.followUp',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default CUSTOMERMANAGEMENT;
