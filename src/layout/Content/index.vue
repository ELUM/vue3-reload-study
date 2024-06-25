<template>
  <div class="kino-content">
    <!-- <div class="kino-content__items" v-for="item in 100">{{item}}</div> -->
    <!-- <Father /> -->
    <Card />
    <Tree :data="tree" />
    <Dynamic />
    <TeleportBox />
  </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import Father from '../../pages/Father&Child/Father.vue';
import Dynamic from '../../pages/Components/Dynamic.vue';
import TeleportBox from '@/pages/teleport/TeleportBox.vue';

interface Tree {
  name: string
  checked: boolean
  children?: Tree[]
}

const tree = reactive<Tree[]>([
  {
    name: '1',
    checked: false,
    children: [
      {
        name: '1-1',
        checked: false
      }
    ]
  },
  {
    name: '2',
    checked: false,
    children: [
      {
        name: '2-1',
        checked: false,
        children: [
          {
            name: '2-1-1',
            checked: true
          },
          {
            name: '2-1-2',
            checked: false
          }
        ]
      }
    ]
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: false
      }
    ]
  }
])

</script>

<style scoped lang="scss">
@include b(content) {
  flex: 1;
  overflow: auto;

  @include e(items) {
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
</style>