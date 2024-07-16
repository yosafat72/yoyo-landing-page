<template>
  <nav id="navbar" class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
        <span class="fw-semibold"> YL Consultan</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useHead } from '@vueuse/head';

let lastScrollTop = 0;

function handleScroll() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      navbar.style.top = '-70px';
    } else {
      navbar.style.top = '0';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

useHead({
  title: 'YL Consultan - Tax Consulting Services',
  meta: [
    { name: 'description', content: 'YL Consultan offers professional tax consulting services. Explore our services, learn more about us, and get in touch with our team.' },
    { name: 'keywords', content: 'YL Consultan, tax consulting, tax services, tax advisor, Jakarta, professional tax services' },
    { property: 'og:title', content: 'YL Consultan - Tax Consulting Services' },
    { property: 'og:description', content: 'YL Consultan provides expert tax consulting services. Discover our services, learn about our expertise, and contact us for professional advice.' },
    { property: 'og:type', content: 'website' }
  ]
});
</script>

<style scoped>
#navbar {
  transition: top 0.3s;
  border-radius: 15px;
  margin: 10px;
}
</style>
