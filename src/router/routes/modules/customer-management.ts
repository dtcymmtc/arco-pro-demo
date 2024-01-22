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
    // {
    //   path: 'list',
    //   name: 'list',
    //   component: () => import('@/views/customer-management/list.vue'),
    //   meta: {
    //     locale: 'menu.customerManagement.list',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
    // {
    //   path: 'clue',
    //   name: 'clue',
    //   component: () => import('@/views/customer-management/clue.vue'),
    //   meta: {
    //     locale: 'menu.customerManagement.clue',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
    // {
    //   path: 'marketing-tool',
    //   name: 'marketingTool',
    //   component: () => import('@/views/customer-management/marketing-tool.vue'),
    //   meta: {
    //     locale: 'menu.customerManagement.marketingTool',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
    // {
    //   path: 'follow-up',
    //   name: 'followUp',
    //   component: () => import('@/views/customer-management/follow-up.vue'),
    //   meta: {
    //     locale: 'menu.customerManagement.followUp',
    //     requiresAuth: true,
    //     roles: ['*'],
    //   },
    // },
    {
      path: 'search-enterprise',
      name: 'searchEnterprise',
      component: () => import('@/views/customer-management/search-enterprise.vue'),
      meta: {
        locale: 'menu.customerManagement.searchEnterprise',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'map',
      name: 'map',
      component: () => import('@/views/customer-management/map/index.vue'),
      meta: {
        locale: 'menu.customerManagement.map',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'super-search',
      name: 'superSearch',
      component: () => import('@/views/customer-management/super-search.vue'),
      meta: {
        locale: 'menu.customerManagement.superSearch',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default CUSTOMERMANAGEMENT;
