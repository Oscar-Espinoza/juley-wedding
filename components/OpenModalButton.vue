<template>
  <button type="button" class="button" @click="openModal">{{ btnText }}</button>
  <Modal :closeModal="closeModal" :isModalOpen="isModalOpen">
    <slot></slot>
  </Modal>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const { btnText } = defineProps({
  btnText: { type: String }
})

const isModalOpen = ref(false)

const closeModal = () => {
  isModalOpen.value = false
}


const openModal = () => {
  isModalOpen.value = true
}

</script>

<style lang="scss" scoped></style>