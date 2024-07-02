<script lang="ts" setup>
import 'animate.css';
import { ref } from 'vue';

const list = ref(Array(10).fill(1))
</script>

<template>
  <div class="content">
    <button @click="list.push(1)">Add</button>
    <button @click="list.pop()">Pop</button>
    <div class="wraps">
      <TransitionGroup enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut">
        <div class="item" v-for="item in list" :key="item">
          {{ item }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wraps {
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  border: 1px solid #ccc;

  .item {
    margin: 10px;
  }
}
</style>