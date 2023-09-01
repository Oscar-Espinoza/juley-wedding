<template>
  <div>
    <h1 class="main-title">
      Caro <span class="apostrophe">&</span> Alexa
    </h1>
  </div>
</template>

<style scoped>
.main-title {
  font-family: var(--font-1);
  color: var(--color-3);
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  font-size: 70px;
}

.main-title::after {
  content: '';
  width: calc(100% + 30px);
  border-top: 1px solid var(--color-2);
  display: block;
  height: 1px;
}

.apostrophe {
  color: var(--color-3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>