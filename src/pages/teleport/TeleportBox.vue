<script lang="ts" setup>
import Dialog from '@/pages/teleport/dialog.vue';

</script>

<template>
  <div class="teleport-box">
    <Teleport :disabled="true" to="body">
      <Dialog />
    </Teleport>
  </div>
</template>

<style>
.teleport-box {
  position: relative;
}
</style>