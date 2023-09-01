<template>
  <div class="date-container">
    <span class="date">04.11.2023</span>
  </div>
</template>

<style scoped>
.date-container {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}

.date {
  font-family: var(--fuente-2);
  font-weight: 900;
  color: var(--color-1);
  display: table;
  white-space: nowrap;
  width: 100%;
  font-size: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
}

.date::after,
.date::before {
  border-top: 1px solid var(--color-2);
  content: '';
  width: 15%;
  height: 1px;
}
</style>