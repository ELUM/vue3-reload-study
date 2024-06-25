<script lang="ts" setup>

</script>

<template>
  <div class="box">
    <div class="dialog">
      <header>
        这是标题
      </header>
      <main>
        这是内容
      </main>
      <footer>
        这是页脚
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
$height: 400px;
$width: 400px;

.box {
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba($color: #141414, $alpha: 0.5);
}

.dialog {
  color: white;
  height: $height;
  width: $width;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: calc($width / -2);
  margin-top: calc($height / -2);

  header {
    height: 50px;
  }

  main {
    border: 1px solid #ccc;
    height: 100%;
  }

  footer {
    height: 50px;
  }
}
</style>