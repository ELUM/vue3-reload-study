<script lang="ts" setup>
import { axios } from '@/server/axios';

interface Data {
  data: {
    title: string
    age: number
    url: string
    author: string
    content: string
  }
}

const { data } = await axios.get<Data>('./data.json')

</script>

<template>
  <div class="sync">
    <div class="sync-content">
      <div><img :src="data.url" alt=""></div>
      <div class="sync-pop">
        <div>{{ data.title }}</div>
        <div>&nbsp;{{ data.author }}</div>
        <div>&nbsp;{{ data.age }}</div>
      </div>
    </div>
    <hr>
    <div>{{ data.content }}</div>
  </div>
</template>

<style scoped>
.sync-content {
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}

.sync-pop {
  margin-left: 10px;
  display: flex;
}
</style>