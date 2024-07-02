<script lang="ts" setup>
import { ref } from 'vue';
import lodash from 'lodash';
import 'animate.css'

const list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
  return {
    id: index,
    number: (index % 9) + 1
  }
}))

const random = () => {
  list.value = lodash.shuffle(list.value)
}
</script>

<template>
  <div>
    <button @click="random">random</button>
    <TransitionGroup tag="div" class="warps" move-class="move">
      <div class="item" v-for="item in list" :key="item.id">
        {{ item.number }}
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
.warps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 10 + 9px);

  .item {
    text-align: center;
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
  }
}

.move {
  transition: all 200ms ease;
}
</style>