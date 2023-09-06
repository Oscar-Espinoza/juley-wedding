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

      <Detail title="Tips" lottie="tips" text="Información adicional para tener en cuenta">
        <OpenModalButton btnText="Info +">
          <DetailModal title="Tips"
            :tips="['•Si recibiste esta invitación es porque te queremos demasiado 🫶🏽 Pero lamentablemente, no podemos duplicar la diversión. Válido para vos no más 🌟😄🎉', '•Desde la entrada hasta la estancia debes rodar 500 metros maso, no te asustes que entre tanto árbol se esconde una boda😅', '• La puntualidad es el mejor regalo que puedes traer. ¡Llega a tiempo para celebrar con nosotras!🕑', '• En una boda al aire libre, la comodidad comienza por los pies. ¡Opta por calzado cómodo o llévate tus chancletas sin pena 😌👡.', '• Por si la noche decide ser fresca, lleva tu abrigo y bailaremos juntos para entrar en calor 🧥💃🌙', '• La fiesta es hasta las 2 am, ¡diviértete al máximo! Si tomas, no manejes; si manejas, no tomes. Tu seguridad es lo primero.🎉🚗🍻', '• Si tú intención es quedarte en Lobos, Avísanos con tiempo y te sugerimos algunas opciones de hospedaje para que nadie se quede sin fiesta ni cama 🏨🎉']" />
        </OpenModalButton>
      </Detail>

      <Detail title="Sobre el regalo!" lottie="present" text="Información importante sobre el regalo de bodas">
        <OpenModalButton btnText="Ver más">
          <DetailModal title="Sobre el regalo" :tips="[
            `
              Nuestro amor es tan grande que podría llenar el océano pero nuestro presupuesto no lo es 😅 🤷🏽‍♀<br><br>
              ¡Si desean regalarnos algo, que sea dinero!<br><br>
              No prometemos gastarlo con sabiduría, pero prometemos pasar un buen rato intentándolo.<br><br>
              Te damos ideas:<br><br>
              •Efectivo (dólares, euros, libras esterlinas, reales, pesos arg)💵<br><br>
              • Tranferencias a:<br>
              Alias: alexavlskz<br>
              Cbu: 143000173025719380010<br>
              Alexandra Velásquez Brubank<br><br>
              ¡Gracias por ser parte de nuestra aventura nupcial!💸👰👰🏽‍♀`]" />
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
  width: 100vw;
}
</style>