<template>
  <div
    :style="{
      width: 'calc(100vw - 220px)',
      height: 'calc(100vh - 60px)',
      backgroundImage: `url(${MapBg})`,
      backgroundSize: 'cover',
    }"
  ></div>
</template>
<script lang="ts" setup>
import MapBg from './map.png';
</script>
