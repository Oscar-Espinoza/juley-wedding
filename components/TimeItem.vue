<template>
  <li class="time-item"><span class="number">{{ number }}</span>{{ label }}</li>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const { number, label } = defineProps(['number', 'label']);
</script>

<style scoped>
.time-item {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  height: fit-content;
  color: var(--color-2);
  font-size: 1.5rem;
  text-align: center;
}

.time-item:nth-child(1),
.time-item:nth-child(2),
.time-item:nth-child(3) {
  border-right: 1px solid #ccc;
}

.number {
  font-size: 2rem;
  color: var(--color-1);
  font-weight: bold;
}
</style>