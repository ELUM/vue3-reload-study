<!--
 * new vue file
 * @author: Kinoteika
 * @since: 2024-07-07
 * MittB.vue
-->
<script setup lang="ts">
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()

instance?.proxy?.$Bus.on('on-click', (val) => {
  console.log(val);
})
instance?.proxy?.$Bus.off('on-click')
instance?.proxy?.$Bus.all.clear()
</script>

<template>
  <div>
    <h1>MittB</h1>
  </div>
</template>

<style scoped></style>
