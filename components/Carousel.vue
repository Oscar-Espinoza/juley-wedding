<template>
  <div class="container">
    <h3 class="title">Retratos de Nuestro Amor</h3>
    <p class="text">Un minuto, un segundo, un unstante que queda en la eternidad</p>


    <Swiper :loop="true" :spaceBetween="10" :thumbs="{ swiper: thumbsSwiper }" :modules="[FreeMode, Navigation, Thumbs]"
      class="mySwiper2">
      <SwiperSlide v-for="photo in photos">
        <img :src="photo" alt="carousel-img">
      </SwiperSlide>
    </Swiper>

    <Swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true"
      :modules="[FreeMode, Navigation, Thumbs]" class="mySwiper">
      <SwiperSlide v-for="photo in photos">
        <img :src="photo" alt="carousel-img">
      </SwiperSlide>
    </Swiper>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
}

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
import 'swiper/css';
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
</script>

<style scoped>
.container {
  padding-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.title {
  font-family: var(--fuente-1);
  font-weight: var(--weight-font-bold);
  color: var(--color-3);
  width: 100%;
  display: inline-block;
  font-size: 40px;
  line-height: 55px;
}

.text {
  font-family: var(--fuente-2);
  font-weight: 900;
  color: var(--color-1);
  width: 100%;
  display: inline-block;
  font-size: 20px;
}

.carousel-container {
  background: var(--color-4);
}

.swiper {
  width: 100%;
  margin: 0;
  outline: 1px rgb(230, 230, 230) solid;
  padding: 10px 10px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 600px;
  object-fit: cover;
  border-radius: 10px;
  margin: auto;
}

.mySwiper .swiper-slide {
  opacity: 0.6;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}
</style>