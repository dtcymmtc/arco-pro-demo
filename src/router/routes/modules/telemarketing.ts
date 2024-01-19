import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const TELEMARKETING: AppRouteRecordRaw = {
  path: '/telemarketing',
  name: 'telemarketing',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.telemarketing',
    requiresAuth: true,
    icon: 'icon-relation',
    order: 5,
  },
};

export default TELEMARKETING;
