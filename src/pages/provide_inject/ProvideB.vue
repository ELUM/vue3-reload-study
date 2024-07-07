<script lang="ts" setup>
import { Ref, inject } from 'vue'

const color = inject<Ref<string>>('color')
</script>

<template>
  <div>
    ProvideB
    <div class="box">

    </div>
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