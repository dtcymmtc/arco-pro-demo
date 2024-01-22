<template>
  <a-drawer
    :width="`${currentTabData.width / 2 + 24 + 303 + 24}px`"
    :visible="true"
    :footer="false"
    unmountOnClose
  >
    <template #title> 企业洞察 </template>
    <div>
      <img
        :src="currentTabData.img"
        alt=""
        :style="{ width: `${currentTabData.width / 2}px`, float: 'left' }"
      />
      <img
        :src="Contact"
        alt=""
        :style="{ width: `303px`, marginTop: '16px', marginLeft: '24px' }"
        style="float: left"
      />
    </div>
  </a-drawer>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import Bg1 from './bg1.png';
import Bg2 from './bg2.png';
import Bg3 from './bg3.png';
import Bg4 from './bg4.png';
import Bg5 from './bg5.png';
import Bg6 from './bg6.png';
import Bg7 from './bg7.png';
import Bg8 from './bg8.png';
import Contact from './contact.png';

const props = defineProps({
  tabIndex: {
    type: Number,
    default: 2,
  },
});

const tabData = [
  { img: Bg1, width: 1934 },
  { img: Bg2, width: 1504 },
  { img: Bg3, width: 1910 },
  { img: Bg4, width: 1990 },
  { img: Bg5, width: 1990 },
  { img: Bg6, width: 1990 },
  { img: Bg7, width: 1918 },
  { img: Bg8, width: 1540 },
];

const currentTabData = computed(() => {
  return tabData[props.tabIndex];
});
</script>
<style>
.arco-drawer-body {
  padding: 0;
}
</style>
