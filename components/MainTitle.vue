<template>
  <div>
    <h1 class="main-title">
      Juley <span class="apostrophe">&</span> Ale
    </h1>
  </div>
</template>

<style scoped>
  .main-title {
    font-family: var(--font-1);
    color: var(--color-1);
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
      border-top: 2px solid var(--color-2);
      display: block;
      height: 1px;
    }

  .apostrophe {
    background: var(--color-2);
    border-radius: 100%;
    padding: 5px;
    width: 80px;
    height: 80px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>