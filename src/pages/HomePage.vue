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
  background-image: url('/mission.jpg');
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat;
  padding: 20px;
  border-radius: 15px; 
}

.bg-service-component {
  background-color: #fef9f3;
}
</style>
