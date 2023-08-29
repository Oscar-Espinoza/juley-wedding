<template>
  <section>
    <div class="title-container">
      <img src="/assets/cinta-end.svg" alt="cinta-end" class="cinta start">
      <h3 class="title">
        Ceremonia y Fiesta
      </h3>
      <img src="/assets/cinta-end.svg" alt="cinta-end" class="cinta end">
    </div>
    <div>
      <Info title="Día" :text="`Sábado 04 de Noviembre <br /> Ceremonia: 17:00hs <br /> Recepción: 18hs`">
        <a title="Add to Calendar" class="addeventatc" data-id="Rs18475642"
          href="https://www.addevent.com/event/Rs18475642" target="_blank">Agendar</a>
      </Info>

      <Info title="Lugar" text="Salon de fiestas Avril">
        <OpenModalButton btnText="Confirmar Asistencia">
          <ConfirmForm />
        </OpenModalButton>
      </Info>

      <Info title="Dirección" text="Av. Los Reartes 12 - BsAs">
        <OpenModalButton btnText="¿Cómo llegar?">
          <Map />
        </OpenModalButton>
      </Info>
    </div>
    <img src="/assets/curves.svg" alt="curves-foot" class="curves">
  </section>
</template>

<script setup>

</script>

<style scoped>
section {
  padding: 50px 0 120px 0;
  position: relative;
}

.title-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  bottom: 0;
  transform: rotateY(180deg)
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
</style>