<!--
 * new vue file
 * @author: Kinoteika
 * @since: 2024-07-07
 * MittA.vue
-->
<script setup lang="ts">
import {getCurrentInstance} from 'vue'

const instance = getCurrentInstance()

const emit = () => {
  instance?.proxy?.$Bus.emit('on-click','mitt')
}
</script>

<template>
  <div>
    <h1>MittA</h1>
    <button @click="emit">emit</button>
  </div>
</template>

<style scoped></style>
