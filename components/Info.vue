<template>
  <div class="info">
    <h3 class="title">Día</h3>
    <p class="text">Sábado 15 se Mayo - 17hs</p>
    <button type="button" class="button">Agendar</button>
  </div>
</template>

<script setup>

</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0;
  gap: 15px;
}

.title {
  font-size: 2rem;
  color: var(--color-1);
}

.text {
  font-weight: var(--weight-font-regular);
  color: var(--color-2);
  font-size: 1.5rem;
  padding: 0 30px;
}

.button {
  font-family: var(--fuente-3);
  font-weight: var(--weight-font-regular);
  background: var(--color-3);
  color: var(--color-4);
  border-radius: 50px;
  font-size: 15px;
  padding: 15px 0;
  border: none;
  width: 100%;
}
</style>