<script lang="ts" setup>
import { reactive, ref, watch } from 'vue';
import gsap from 'gsap';

const num = reactive({
  current: 0,
  tweenedNumber: 0
})

watch(() => num.current, (newVal, oldVal) => {
  gsap.to(num, {
    duration: 1,
    tweenedNumber: newVal,
  })
})
</script>

<template>
  <div>
    <input v-model="num.current" type="number" step="20">
    {{ num.tweenedNumber.toFixed(0) }}
  </div>
</template>

<style lang="scss" scoped></style>