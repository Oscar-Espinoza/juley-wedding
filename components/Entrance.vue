<template>
  <Swiper :pagination="true" :modules="[Pagination]" class="mySwiper">
    <SwiperSlide v-for="photo in photos">
      <img :src="photo" alt="carousel-img">
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules';

const photos = [
  '/assets/entrance_1.webp',
  '/assets/entrance_2.webp',
]
import 'swiper/css';
import 'swiper/css/pagination';
</script>

<style scoped>
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
}

.modal {
  overflow-y: hidden !important;
}
</style>