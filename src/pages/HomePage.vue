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
            <h4 id="services">Third heading</h4>
            <p>...</p>
            <h4 id="testimonials">
                <TestimonialComponent></TestimonialComponent>
            </h4>
            <h4 id="contact">Fifth heading</h4>
            <p>...</p>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import NavbarComponent from '../components/NavbarComponent.vue';
import ImageSliderComponent from '../components/ImageSliderComponent.vue';
import AboutComponent from '../components/AboutComponent.vue';
import TestimonialComponent from '../components/TestimonialComponent.vue';

</script>