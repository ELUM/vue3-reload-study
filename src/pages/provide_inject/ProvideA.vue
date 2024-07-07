<script lang="ts" setup>
import ProvideB from './ProvideB.vue';
import { Ref, inject } from 'vue'

const color = inject<Ref<string>>('color')
</script>

<template>
  <div>
    ProvideA
    <div class="box">

    </div>
    <ProvideB />
  </div>
</template>

<style scoped>
.box {
  height: 50px;
  width: 50px;
  border: 1px sloid #ccc;
  background-color: v-bind(color);
}
</style>