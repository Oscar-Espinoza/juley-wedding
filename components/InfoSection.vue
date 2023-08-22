<template>
  <section>
    <div class="title-container">
      <img src="/assets/cinta-end.svg" alt="cinta-end" class="cinta start">
      <h3 class="title">
        Ceremonia y Fiesta
      </h3>
      <img src="/assets/cinta-end.svg" alt="cinta-end" class="cinta end">
    </div>
    <div>
      <Info />
      <Info />
      <Info />
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
section {
  padding: 50px 0;
}

.title-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  padding: 10px 30px;
  background-color: var(--color-2);
  color: #fff;
  font-size: 2rem;
  z-index: 1;
}

.cinta {
  position: absolute;
  z-index: 0;
  height: 80%;
}

.start {
  left: -4%;
  transform: rotate(180deg);
}

.end {
  right: -4%;
}
</style>