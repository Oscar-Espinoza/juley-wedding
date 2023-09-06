<template>
  <div>
    <Welcome :handlePlay="handlePlay" />
    <TopSection />
    <InfoSection :handleSuccess="handleSuccess" :confirmed="confirmed" />
    <Carousel />
    <DetailsSection />
    <Footer :handleSuccess="handleSuccess" :confirmed="confirmed"></Footer>
  </div>
  <div id="modal"></div>
  <div class="music" @click="handleMute">
    <img :src="`/assets/volume-${muted ? 'off' : 'on'}.svg`" alt="music-on">
    <audio ref="song" src="/assets/para-siempre-kg.mp3" autoplay loop :muted="muted"></audio>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const muted = ref(true)
const song = ref(null)
const confirmed = ref(false)

const handleSuccess = () => {
  confirmed.value = true
}

const handleMute = () => {
  muted.value = !muted.value
}

const handlePlay = () => {
  song.value.play()
  muted.value = false
}

</script>

<style scoped>
.music {
  background: #9a5b713b;
  padding: 10px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 10;
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