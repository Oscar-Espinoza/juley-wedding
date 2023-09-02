<template>
  <div>
    <TopSection />
    <InfoSection />
    <Carousel />
    <DetailsSection />
    <Footer />
  </div>
  <div id="modal"></div>
  <div class="music" @click="handlePlay">
    <img :src="`/assets/volume-${muted ? 'off' : 'on'}.svg`" alt="music-on">
    <audio src="/assets/para-siempre-kg.mp3" autoplay :muted="muted"></audio>
  </div>
</template>

<script setup>
import { ref } from 'vue'


const muted = ref(true)

const handlePlay = () => {
  muted.value = !muted.value
}
</script>

<style scoped>
.music {
  background: #9a5b713b;
  padding: 10px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.music img {
  width: 30px;
}
</style>