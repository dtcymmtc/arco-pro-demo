import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const CALLOUT: AppRouteRecordRaw = {
  path: '/call-out',
  name: 'callOut',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.callOut',
    requiresAuth: true,
    icon: 'icon-phone',
    order: 5,
  },
};

export default CALLOUT;
