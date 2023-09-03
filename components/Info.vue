<template>
  <div class="info">
    <h3 class="title">{{ title }}</h3>
    <p class="text" v-html="text"></p>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const { title, text, buttonText } = defineProps({
  title: { type: String },
  text: { type: String },
  buttonText: { type: String },
  handleButton: { type: Function, default: () => { } }
})
const isModalOpen = ref(false)
const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  gap: 15px;
  background: var(--color-4);
  border-radius: 10px;
}

.title {
  font-size: 2rem;
  color: var(--color-3);
}

.text {
  font-weight: var(--weight-font-regular);
  color: var(--color-2);
  font-size: 1.5rem;
  padding: 0 30px;
}
</style>