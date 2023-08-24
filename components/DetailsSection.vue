<template>
  <section>
    <h2 class="title">Detalles</h2>
    <p class="text">Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.</p>
    <div class="details">
      <Detail title="Código de vestimenta" lottie="dress" text="Información adicional
para tener en cuenta" buttonText="Info +" :handleButton="() => { }" />
      <Detail title="Tips y Notas" lottie="tips" text="Una orientación para
tu vestuario" buttonText="Ver más" :handleButton="() => { }" />
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
section {
  padding: 50px 40px;
  text-align: center;
  gap: 15px;
}

.title {
  font-family: var(--fuente-1);
  font-weight: var(--weight-font-bold);
  color: var(--color-1);
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
}
</style>