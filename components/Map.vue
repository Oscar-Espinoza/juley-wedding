<template>
  <div class="container">
    <h2 class="title">Cómo llegar</h2>
    <GoogleMap api-key="AIzaSyB851ao3fId1Mek1gwTK65AlkEn2NAu4q4" style="width: 100%; height: 300px" :center="center"
      :zoom="15">
      <Marker :options="{ position: center }" />
    </GoogleMap>
    <a href="https://maps.google.com/?q=-35.264271,-58.985481" class="button" target="_blank">Ampliar Mapa</a>
  </div>
</template>

<script setup>

import { GoogleMap, Marker } from 'vue3-google-map'
const center = { lat: -35.264271, lng: -58.985481 }
</script>

<style scoped>
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: 25px;
  line-height: 30px;
  font-family: var(--fuente-3);
  font-weight: var(--weight-font-bold);
  color: var(--color-1);
}

a {
  text-decoration: none;
}
</style>