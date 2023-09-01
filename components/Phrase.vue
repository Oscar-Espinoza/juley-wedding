<template>
  <div class="quote-container">
    <img src="/assets/comilla.svg" alt="quotes" class="quote open" />
    <p class="phrase">Todos somos mortales, <br> hasta el primer beso y la segunda copa de vino </p>
    <img src="/assets/comilla.svg" alt="quotes" class="quote close" />
  </div>
</template>


<style scoped>
.quote-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  color: var(--color-1);
  font-family: var(--font-2);
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 0;
  padding: 0 5px;
}

.quote {
  width: 33px;
}

.quote.close {
  transform: rotate(180deg);
}
</style>