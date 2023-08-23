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
      <Info title="Día" text="Sábado 15 se Mayo - 17hs" button-text="Agendar" :handle-button="() => { }" />

      <Info title="Lugar" text="Salon de fiestas Avril" button-text="Agendar" :handle-button="() => { }" />

      <Info title="Dirección" text="Av. Los Reartes 12 - BsAs" button-text="Agendar" :handle-button="() => { }" />
    </div>
    <img src="/assets/curves.svg" alt="curves-foot" class="curves">
  </section>
</template>

<script setup>

</script>

<style scoped>
section {
  padding: 50px 0 120px 0;
  position: relative;
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

.curves {
  position: absolute;
  width: 100%;
  bottom: 0;
  transform: rotateY(180deg)
}
</style>