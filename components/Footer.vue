<template>
  <footer>
    <h2 class="main-title">
      Caro <span class="apostrophe">&</span> Alexa
    </h2>
    <p @click="openModal" class="confirm">Confirmar Asistencia</p>
  </footer>
  <Modal :closeModal="closeModal" :isModalOpen="isModalOpen">
    <ConfirmForm />
  </Modal>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped>
footer {
  padding: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.main-title {
  font-family: var(--font-1);
  color: var(--color-1);
  display: flex;
  gap: 5px;
  justify-content: center;
  font-size: 50px;
}

.apostrophe {
  background: var(--color-2);
  border-radius: 100%;
  padding: 5px;
  width: 40px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  align-self: flex-end;
}

.confirm {
  color: var(--color-3);
  font-size: 22px;
  cursor: pointer;
}
</style>