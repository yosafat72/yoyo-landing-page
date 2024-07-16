<template>
  <div class="d-flex flex-column bg-highlight mb-3" style="background-color: #faf4e4;">
    <div class="bd-highlight">
      <NavbarComponent></NavbarComponent>
    </div>
    <div class="bd-highlight mt-5">
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" class="scrollspy-example" tabindex="0">
          <div id="home" class="home-background">
            <ImageSliderComponent></ImageSliderComponent>
          </div>
          <h4 id="about">
            <AboutComponent></AboutComponent>
          </h4>
          <h4 id="services" class="bg-service-component">
            <ServiceComponent></ServiceComponent>
          </h4>
          <p>...</p>
          <h4 id="testimonials">
            <TestimonialComponent></TestimonialComponent>
          </h4>
          <p>...</p>
          <h4 id="contact">
            <FooterComponent></FooterComponent>
          </h4>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue';
import ImageSliderComponent from '../components/ImageSliderComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import ServiceComponent from '../components/ServiceComponent.vue';
import TestimonialComponent from '../components/TestimonialComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>

<style scoped>
.home-background {
  position: relative;
  background-image: url('/backgroundImage.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 15px; 
  overflow: hidden;
}

.home-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fef9f3;
  opacity: 0.7; /* Sesuaikan opasitas sesuai kebutuhan */
  backdrop-filter: blur(10px); /* Sesuaikan tingkat blur sesuai kebutuhan */
  border-radius: 15px; /* Sesuaikan dengan elemen utama */
  z-index: 1; /* Agar overlay berada di atas background image */
}

.home-background > * {
  position: relative;
  z-index: 2; /* Agar konten berada di atas overlay */
}


.bg-service-component {
  background-color: #fef9f3;
}
</style>
