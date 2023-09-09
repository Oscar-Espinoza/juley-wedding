<template>
  <section>
    <div class="title-container">
      <img src="/assets/cinta-end.svg" alt="cinta-end" class="cinta start">
      <h3 class="title">
        Ceremonia y Fiesta
      </h3>
      <img src="/assets/cinta-end.svg" alt="cinta-end" class="cinta end">
    </div>
    <div class="info-container">
      <Info title="Día" :text="`Sábado 04 de Noviembre <br /> Ceremonia: 17:00hs <br /> Recepción: 18hs`">
        <a title="Add to Calendar" class="addeventatc" data-id="Rs18475642"
          href="https://www.addevent.com/event/Rs18475642" target="_blank">Agendar</a>
      </Info>

      <Info title="Lugar" text="Estancia “La Guarida Lobos”">
        <OpenModalButton btnText="Confirmar Asistencia">
          <ConfirmForm :handleSuccess="handleSuccess" :confirmed="confirmed" />
        </OpenModalButton>
      </Info>

      <Info title="Dirección" text="Sobre ruta 41, Lobos. Prov. BsAs">
        <OpenModalButton btnText="¿Cómo llegar?">
          <Map />
        </OpenModalButton>
        <OpenModalButton btnText="Imágenes de la entrada">
          <Entrance />
        </OpenModalButton>
      </Info>
    </div>
    <img src="/assets/curves.svg" alt="curves-foot" class="curves">
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const { handleSuccess, confirmed } = defineProps({
  handleSuccess: { type: Function, required: true },
  confirmed: { type: Boolean, required: true },
})
</script>

<style scoped>
section {
  padding: 50px 0 120px 0;
  position: relative;
  gap: 30px;
}

.title-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-container {
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  padding: 10px 30px;
  background-color: var(--color-2);
  color: #fff;
  font-size: 2rem;
  z-index: 1;
}

.cinta {
  position: absolute;
  z-index: 0;
  height: 80%;
}

.start {
  left: -4%;
  transform: rotate(180deg);
}

.end {
  right: -4%;
}

.curves {
  position: absolute;
  width: 100vw;
  bottom: 0px;
  transform: rotateY(180deg);
}

.addeventatc {
  font-family: var(--fuente-3);
  font-weight: var(--weight-font-regular);
  background: var(--color-3);
  border-radius: 50px;
  font-size: 18px;
  padding: 12px 0;
  border: none;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #fff !important;
  z-index: 1;
}


@media (min-width: 767px) {
  .curves {
    bottom: -50px;
  }
}
</style>