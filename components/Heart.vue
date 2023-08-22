<template>
  <div class="heart-container">
    <svg class="heart" viewBox="0 0 32 29.6">
      <path
        d="M16 29.6c-1.2 0-2.3-.5-3.2-1.3L1.3 18C.4 17.1 0 16 0 14.8c0-1.2.4-2.3 1.3-3.2l11.5-11.5c2.3-2.3 6.1-2.3 8.4 0L32 11.6c2.3 2.3 2.3 6.1 0 8.4L19.2 28.3c-.9.9-2 1.3-3.2 1.3z" />
    </svg>
  </div>
</template>

<script>
</script>

<style scoped>
.heart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.heart {
  width: 50px;
  height: 50px;
  fill: red;
  animation: scaleHeart 1s infinite;

  @keyframes scaleHeart {

    0%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.4);
    }
  }
}
</style>