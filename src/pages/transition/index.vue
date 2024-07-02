<script lang="ts" setup>
import 'animate.css'
import { ref } from 'vue';

const view = ref(true)

const Enter = (el: Element, done: Function) => {
  console.log('过度曲线');
  setTimeout(() => {
    done()
  }, 200)
}
</script>

<template>
  <div class="content">
    <button @click="view = !view">click</button>
    <!-- <Transition @enter="Enter" enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut">
      <div class="box" v-if="view"></div>
    </Transition> -->
    test
    <Transition appear :appear-active-class="'animate__animated animate__fadeIn'" >
      <div v-if="view" class="box"></div>
    </Transition>
  </div>
</template>

<style lang="scss">
.from {
  width: 0;
  height: 0;
}

.active {
  transition: all 2s ease;
}

.to {
  width: 200px;
  height: 200px;
}

.box {
  width: 200px;
  height: 200px;
  background-color: red;
}

// .fade-enter-from {
//   width: 0;
//   height: 0;
//   transform: rotate(360deg);
// }

// .fade-enter-active {
//   transition: all 1s ease-in-out;
// }

// .fade-enter-to {
//   width: 200px;
//   height: 200px;
// }

// .fade-leave-from {
//   width: 200px;
//   height: 200px;
// }

// .fade-leave-active {
//   transition: all 2s ease;
// }

// .fade-leave-to {
//   width: 0;
//   height: 0;
//   transform: rotate(360deg);
// }
</style>