<template>
  <div class="bg-pink-img">
    <section class="invite-section">
      <div class="flowers-container">
        <img src="/assets/flower-left.webp" alt="left-flower">
        <img src="/assets/flower-middle.webp" alt="middle-flower">
        <img src="/assets/flower-right.webp" alt="right-flower">
      </div>
      <WeddingDate />
      <MainTitle />
      <Phrase />
      <client-only>
        <Vue3Lottie animationLink="/assets/scroll-down.json" :height="200" :width="200" />
      </client-only>
    </section>
    <CounterSection />
  </div>
</template>

<script setup>

</script>

<style scoped>
.bg-pink-img {
  background: url("/assets/fondo-top.webp");
  background-size: cover;
  background-repeat: no-repeat;
}

.invite-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 1;
}

.flowers-container {
  position: relative;
  display: flex;
  justify-content: center;
  width: 260px;
  height: 108px;
}

.flowers-container img {
  width: 140px;
  height: 140px;
  object-fit: contain;
  position: absolute;
  top: -40px;
}

.flowers-container img:nth-child(1) {
  left: 0;
}

.flowers-container img:nth-last-child(1) {
  right: 0;
}
</style>