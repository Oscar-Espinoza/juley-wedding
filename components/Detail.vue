<template>
  <div class="container">
    <h3 class="title">{{ title }}</h3>
    <client-only>
      <div :class="lottie">
        <Vue3Lottie :animationLink="`/assets/${lottie}.json`" />
      </div>
    </client-only>
    <p class="text" v-html="text"></p>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const { title, lottie, text, buttonText, handleButton } = defineProps({
  title: { type: String },
  lottie: { type: String },
  text: { type: String },
})
</script>

<style scoped>
.container {
  background-color: var(--color-4);
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

.title {
  font-family: var(--fuente-3);
  font-weight: var(--weight-font-bold);
  color: var(--color-3);
  font-size: 1.75rem;
}

.dress {
  height: 265px;
}

.tips {
  height: 150px;
  margin: 57.5px 0;
}

.text {
  font-family: var(--fuente-3);
  font-weight: var(--weight-font-regular);
  color: var(--color-2);
  margin-bottom: 0;
  font-size: 17px;
  line-height: 19px;
  padding-bottom: 20px;
}
</style>