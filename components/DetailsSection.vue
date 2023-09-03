<template>
  <section>
    <h2 class="title">Detalles</h2>
    <p class="text">Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.</p>
    <div class="details">
      <Detail title="Código de vestimenta" lottie="dress" text="Una orientación para
tu vestuario">
        <OpenModalButton btnText="Ver más">
          <DetailModal title="Código de vestimenta"
            :tips="['Outfit blanco 🤍 puro y castro', 'Zapatos del color que quieras 😉']" />
        </OpenModalButton>
      </Detail>

      <Detail title="Tips y Notas" lottie="tips" text="Información adicional
para tener en cuenta">
        <OpenModalButton btnText="Info +">

        </OpenModalButton>
      </Detail>
    </div>
    <img src="/assets/curves.svg" alt="curves-svg" class="curves">
  </section>
</template>

<script>

</script>

<style scoped>
section {
  padding: 50px 40px 100px 40px;
  text-align: center;
  gap: 15px;
}

.title {
  font-family: var(--fuente-1);
  font-weight: var(--weight-font-bold);
  color: var(--color-3);
  width: 100%;
  display: inline-block;
  font-size: 35px;
  line-height: 55px;
  margin-bottom: 5px;
  text-align: center;
}

.text {
  font-family: var(--fuente-2);
  font-weight: var(--weight-font-regular);
  color: var(--color-1);
  width: 100%;
  display: inline-block;
  font-size: 20px;
}

.details {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 500px;
  z-index: 10;
}

.curves {
  position: absolute;
  bottom: 0;
}
</style>