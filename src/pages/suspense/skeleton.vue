<script lang="ts" setup>

</script>

<template>
  <div class="skeleton">
    <div class="skeleton-content">
      <div class="avatar"></div>
      <div class="skeleton-pop" />
    </div>
    <hr>
    <div class="content"></div>
    <div class="content"></div>
  </div>
</template>

<style scoped>
.skeleton-content {
  width: 100%;
  display: flex;
  align-items: center;

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ccc
  }
}

.skeleton-pop {
  width: 100px;
  height: 20px;
  margin-left: 10px;
  display: flex;
  background-color: #ccc;
}

.content {
  width: 100%;
  height: 20px;
  background-color: #ccc;
  margin-bottom: 10px;
}
</style>