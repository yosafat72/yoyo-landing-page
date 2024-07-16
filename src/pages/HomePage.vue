<template>
  <div class="d-flex flex-column bg-highlight mb-3">
    <div class="bd-highlight">
      <NavbarComponent />
    </div>
    <div class="bd-highlight mt-5">
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <div id="home" class="home-background">
          <ImageSliderComponent />
        </div>
        <h4 id="about">
          <AboutComponent />
        </h4>
        <div id="services" class="services-background">
          <ServiceComponent />
        </div>
        <div id="contact" >
          <FooterComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import NavbarComponent from '../components/NavbarComponent.vue';
import ImageSliderComponent from '../components/ImageSliderComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import ServiceComponent from '../components/ServiceComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

useHead({
  title: 'KKP Yoyo Lukasa - Konsultan Pajak Profesional',
  meta: [
    { name: 'description', content: 'KKP Yoyo Lukasa menyediakan layanan konsultasi pajak profesional di Tangerang. Kami menawarkan solusi pajak yang tepat dan efisien.' },
    { name: 'keywords', content: 'KKP Yoyo Lukasa, konsultan pajak Tangerang, layanan pajak, konsultasi pajak, perencanaan pajak' }
  ]
});
</script>


<style scoped>
.home-background {
  position: relative;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5)), url('/backgroundImage.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  overflow: hidden;
}

.home-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgb(255, 255, 255), rgba(248, 193, 142, 0.5));
  backdrop-filter: blur(10px);
  z-index: 1;
}

.home-background > * {
  position: relative;
  z-index: 2;
}

.services-background {
  background: linear-gradient(to bottom, #ffffff, #faf4e3);
}

/*  */
</style>
