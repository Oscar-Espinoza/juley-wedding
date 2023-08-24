<template>
  <section class="container">
    <div class="frame">
      <h3 class="title">Faltan</h3>
      <ol class="time">
        <TimeItem :number="days" label="días" />
        <TimeItem :number="hours" label="hs" />
        <TimeItem :number="minutes" label="min" />
        <TimeItem :number="seconds" label="seg" />
      </ol>
      <client-only>
        <Vue3Lottie animationLink="/assets/heart.json" />
      </client-only>
    </div>
    <img src="/assets/curves.svg" alt="curves-img" class="curves">
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import TimeItem from './TimeItem.vue';

let targetDate = new Date('2023-12-31');
let days = ref(0);
let hours = ref(0);
let minutes = ref(0);
let seconds = ref(0);

const updateCountdown = () => {
  const now = new Date();
  const timeDiff = targetDate - now;

  days.value = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((timeDiff % (1000 * 60)) / 1000);
};

let interval;

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbf6f845;
  padding: 20px 0;
  position: relative;
}

.curves {
  width: 100%;
  position: absolute;
  z-index: 0;
  bottom: 0;
}

.frame {
  background: url('/assets/counter.webp');
  width: 100%;
  max-width: 375px;
  height: 375px;
  background-size: cover;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 50px 0;
  position: relative;
  z-index: 1;
}

.title {
  font-family: var(--fuente-2);
  font-weight: var(--weight-font-bold);
  color: var(--color-2);
  font-size: 40px;
}

.time {
  list-style: none;
  list-style-type: none;
  display: flex;
  padding-top: 10px;
}

.heart {
  width: 100px;
  height: 100px;
  display: flex;
}

.heart svg {
  width: 50px;
  height: 50px;
}
</style>