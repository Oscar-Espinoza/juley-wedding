<template>
  <div class="container">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="tip in tips">{{ tip }}</li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const { title, info } = defineProps({
  title: { type: String },
  tips: { type: Array }
})
</script>

<style scoped>
.container {
  text-align: center;
}

h3 {
  font-size: 25px;
  line-height: 30px;
  font-family: var(--fuente-3);
  font-weight: var(--weight-font-bold);
  color: var(--color-1);
  margin-bottom: 20px;
}

ul {
  list-style: none;
}

li {
  font-family: var(--fuente-3);
  font-weight: var(--weight-font-regular);
  color: var(--color-2);
  text-align: center;
  border-bottom: 1px solid rgb(206, 206, 206);
  padding: 10px 0;
}
</style>