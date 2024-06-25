<template>
  <div @click.stop="clickTap(item,$event)" class="tree" v-for="item in data">
    <input v-model="item.checked" type="checkbox"> <span>{{ item.name }}</span>
    <KinoTree v-if="item?.children" :data="item.children" />
  </div>
</template>

<script setup lang='ts'>
interface Tree {
  name: string
  checked: boolean
  children?: Tree[]
}

defineOptions({
  name: 'KinoTree'
})

const { data } = defineProps({
  data: {
    type: Array<Tree>,
    default: () => []
  }
})

const clickTap = (item: Tree,e: Event) => {
  console.log(item);
  console.log(e.target);
  
}
</script>

<style lang="scss">
.tree {
  margin-left: 10px;
}
</style>