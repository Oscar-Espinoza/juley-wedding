<template>
  <footer>
    <h2 class="main-title">
      Caro & Alexa
    </h2>
    <p @click="openModal" class="confirm">Confirmar Asistencia</p>
  </footer>
  <Modal :closeModal="closeModal" :isModalOpen="isModalOpen">
    <ConfirmForm :handleSuccess="handleSuccess" :confirmed="confirmed" />
  </Modal>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const { handleSuccess, confirmed } = defineProps({
  handleSuccess: { type: Function, required: true },
  confirmed: { type: Boolean, required: true }
})

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
  color: var(--color-3);
  display: flex;
  gap: 5px;
  justify-content: center;
  font-size: 50px;
}

.apostrophe {
  color: var(--color-3);
  font-size: 30px;
}

.confirm {
  color: var(--color-1);
  font-size: 22px;
  cursor: pointer;
}

.confirm:hover {
  color: var(--color-3);
}
</style>