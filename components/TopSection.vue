<template>
  <section class="invite-section bg-pink-img">
    <div class="flowers-container">
      <img src="/assets/flower-left.webp" alt="left-flower">
      <img src="/assets/flower-middle.webp" alt="middle-flower">
      <img src="/assets/flower-right.webp" alt="right-flower">
    </div>
    <Date />
  </section>
  
</template>

<script setup>

</script>

<style scoped>
  .bg-pink-img {
    background: url("/assets/fondo-top.webp");
    display: flex;
    flex-direction: column;
    align-items: center;
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