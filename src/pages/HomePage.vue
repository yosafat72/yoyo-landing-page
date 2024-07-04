<template>
  <div class="d-flex flex-column bg-highlight mb-3">
    <div class="bd-highlight">
      <NavbarComponent></NavbarComponent>
    </div>
    <div class="bd-highlight mt-5">
      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" class="scrollspy-example" tabindex="0">
          <div id="home">
              <ImageSliderComponent></ImageSliderComponent>
          </div>
          <h4 id="about">
              <AboutComponent></AboutComponent>
          </h4>
          <h4 id="services" :style="backgroundImageStyle">
            <ServiceComponent></ServiceComponent>
          </h4>
          <p>...</p>
          <h4 id="testimonials">Fourth heading</h4>
          <p>...</p>
          <h4 id="contact">Fifth heading</h4>
          <p>...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import ImageSliderComponent from '../components/ImageSliderComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import ServiceComponent from '../components/ServiceComponent.vue';

const backgroundImageStyle = computed(() => ({
backgroundImage: `url('/h4_background2.jpg')`,
backgroundSize: 'cover',
backgroundPosition: 'center',
height: 'auto',
}));
</script>

