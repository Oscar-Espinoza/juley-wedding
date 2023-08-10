<template>
  <div class="date-container">
    <span class="date">15 de Noviembre del 2023</span>
  </div>
</template>

<style scoped>
  .date-container {
    width: 100%;
    text-align: center;
  }

  .date {
    font-family: var(--fuente-2);
    font-weight: var(--weight-font-regular);
    color: var(--color-1);
    display: table;
    white-space: nowrap;
    width: 100%;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .date::after, .date::before {
    border-top: 1px solid var(--color-2);
    content: '';
    width: 10%;
    height: 1px;
  }

</style>