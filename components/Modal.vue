<template>
  <ClientOnly>
    <Teleport to="#modal">
      <div class="modal-container" v-if="isModalOpen">
        <div class="modal">
          <button @click="closeModal" class="close-modal">x</button>
          <slot></slot>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const { closeModal, isModalOpen } = defineProps({
  closeModal: { type: Function },
  isModalOpen: { type: Boolean },
})
</script>

<style scoped>
.modal {
  padding: 60px 40px 40px 40px;
  background-color: white;
  z-index: 1;
  position: relative;
  width: 90%;
  max-width: 475px;
  border-radius: 30px;
  max-height: 80vh;
  overflow-y: auto;
}
</style>