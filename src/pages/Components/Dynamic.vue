<template>
  <div>
    <div style="display: flex;">
      <div @click="change(item, index)" :class="[active == index ? 'active' : null]" class="tabs"
        v-for="(item, index) in data">
        <div>{{ item.name }}</div>
      </div>
    </div>
    <component :is="tab" />
  </div>
</template>

<script setup lang='ts'>
import { reactive, ref, shallowRef } from 'vue'
import AVue from './A.vue';
import BVue from './B.vue';
import CVue from './C.vue';

const tab = shallowRef('AVue')
const active = ref(0)
const data = reactive([{
  name: 'A组件',
  com: 'AVue'
},
{
  name: 'B组件',
  com: 'BVue'
},
{
  name: 'C组件',
  com: 'CVue'
}])
const change = (item: any, index: number) => {
  active.value = index
  tab.value = item.com
}
</script>

<script lang="ts">
export default {
  components: {
    AVue,
    BVue,
    CVue
  }
}
</script>

<style lang="scss" scoped>
.active {
  background-color: skyblue;
}

.tabs {
  border: 1px solid #ccc;
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>