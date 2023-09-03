<template>
  <section class="container" v-if="showWelcome">
    <div class="message">
      <img src="/assets/welcome-flowers.webp" alt="flowers" class="flowers-img">
      <p class="text">Estás Cordialmente Invitado/a A Nuestra Boda</p>
      <h2 class="title">Caro y Alexa</h2>
      <p class="music text">La música de fondo es parte de la experiencia</p>
      <div class="music-btns">
        <button class="button" @click="playMusic">Ingresar con música</button>
        <button class="button" @click="hideWelcome">Ingresar sin música</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const { handlePlay } = defineProps({
  handlePlay: { type: Function }
})

const showWelcome = ref(true)

const hideWelcome = () => {
  showWelcome.value = false
}

const playMusic = () => {
  handlePlay()
  hideWelcome()
}

</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: var(--color-4);
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.flowers-img {
  max-width: 200px;
}

.text {
  font-size: 1.25rem;
  font-family: var(--fuente-3);
  font-weight: var(--weight-font-regular);
  color: var(--color-2);
}

.title {
  font-size: 3rem;
  font-family: var(--fuente-1);
  font-weight: 900;
  color: var(--color-3);
  display: inline-block;
  width: 100%;
}

.text.music {
  font-size: 1rem;
}

.music-btns {
  display: flex;
  gap: 5px;
  white-space: nowrap;
}

.music-btns button {
  font-size: 1rem;
}

@media (min-width: 767px) {
  .text {
    font-size: 2rem;
  }

  .text.music {
    font-size: 1.25rem;
  }

  .title {
    font-size: 4rem;
  }

  .music-btns button {
    font-size: 1.25rem;
  }

}
</style>