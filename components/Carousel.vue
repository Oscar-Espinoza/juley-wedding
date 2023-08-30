<template>
  <div class="container">
    <h3 class="title">Retratos de Nuestro Amor</h3>
    <p class="text">Un minuto, un segundo, un unstante que queda en la eternidad</p>
    <Swiper :modules="[EffectCube, Pagination]" effect="cube" :grabCursor="true" :loop="true" :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }" :pagination="true">
      <SwiperSlide v-for="photo in photos">
        <img :src="photo" alt="carousel-img">
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCube, Pagination } from 'swiper/modules';

const photos = [
  '/assets/photos/photo_1.webp',
  '/assets/photos/photo_2.webp',
  '/assets/photos/photo_3.webp',
  '/assets/photos/photo_4.webp',
  '/assets/photos/photo_5.webp',
  '/assets/photos/photo_6.webp',
  '/assets/photos/photo_7.webp',
  '/assets/photos/photo_8.webp',
]

import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css'
</script>

<style scoped>
.container {
  padding: 50px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.title {
  font-family: var(--fuente-1);
  font-weight: var(--weight-font-bold);
  color: var(--color-1);
  width: 100%;
  display: inline-block;
  font-size: 40px;
  line-height: 55px;
}

.text {
  font-family: var(--fuente-2);
  color: var(--color-1);
  width: 100%;
  display: inline-block;
  font-size: 20px;
}

.swiper {
  max-width: 400px;
  width: calc(100% - 50px);
  height: 350px;
  overflow: visible;

}

.swiper-slide img {
  width: 100%;
  height: 100%;
  border-radius: 40px;
}
</style>