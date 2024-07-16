<template>
  <div class="container d-flex flex-column align-items-center justify-content-center mt-5">
    <div class="text-center mb-5">
      <h3 class="fw-bold" style="color: black;">Comprehensive Tax Solutions</h3>
      <p class="lead">Tailored Expertise for Your Unique Needs</p>
    </div>
    <div class="container">
      <div class="row g-4 justify-content-center">
        <div v-for="service in services" :key="service.title" class="col-md-3 animate">
          <div class="card p-1" style="width: 16rem; min-width: 14rem; height: 100%;">
            <img :src="service.image" class="card-img-top rounded" alt="..." style="height: 175px;">
            <div class="card-body">
              <div class="card-title">
                <div class="fw-bold" style="font-size: 14px;">{{ service.title }}</div>
              </div>
              <div class="card-text fw-light" style="font-size: 12px;">
                {{ service.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';

interface Service {
  image: string;
  title: string;
  description: string;
}

const services = ref<Service[]>([
  {
    image: "/img_tax_planning.jpg",
    title: "Tax Planning and Compliance",
    description: "Comprehensive tax planning and compliance services tailored to meet your unique needs.",
  },
  {
    image: "/img_business_tax.jpg",
    title: "Business Tax Services",
    description: "Specialized tax solutions for businesses of all sizes, aimed at minimizing tax liabilities and maximizing profitability.",
  },
  {
    image: "/img_individual_tax.jpg",
    title: "Individual Tax Services",
    description: "Personalized tax consulting for individuals, ensuring accurate and timely tax filings.",
  },
  {
    image: "/img_audit_support.jpg",
    title: "Audit Support",
    description: "Expert assistance in preparing for and navigating tax audits, reducing stress and potential liabilities.",
  },
  {
    image: "/img_consulting.jpg",
    title: "Consulting and Advisory",
    description: "Strategic advice on tax implications of financial decisions, helping you make informed choices.",
  },
]);

onMounted(() => {
  const elements = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeIn');
      } else {
        entry.target.classList.remove('fadeIn');
      }
    });
  }, {
    threshold: 0.1,
  });

  elements.forEach((el) => observer.observe(el));
});

useHead({
  title: 'YL Consultan - Tax Services',
  meta: [
    { name: 'description', content: 'Explore YL Consultan’s comprehensive tax solutions including tax planning, business tax services, individual tax services, audit support, and consulting.' },
    { name: 'keywords', content: 'tax services, tax planning, business tax, individual tax, audit support, tax consulting, financial advisory' },
    { property: 'og:title', content: 'YL Consultan - Tax Services' },
    { property: 'og:description', content: 'Discover YL Consultan’s wide range of tax services tailored to meet your unique needs, from tax planning to audit support and financial consulting.' },
    { property: 'og:image', content: '/img_tax_planning.jpg' },
    { property: 'og:url', content: 'https://yourwebsite.com/services' },
    { property: 'og:type', content: 'website' }
  ]
});
</script>

<style scoped>
.container {
  padding: 20px;
}

.card {
  border: none;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  padding: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.card-body {
  padding: 30px;
}

.card-body i {
  color: #007bff;
}

.card-title {
  font-weight: bold;
}

.elementor-widget-wrap {
  background-color: rgba(64, 84, 178, 0.9);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.elementor-widget-wrap:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
}

.elementor-icon {
  color: #007bff;
  font-size: 3rem;
}

.btn-primary {
  background-color: #007bff;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
}

.btn-primary:hover {
  background-color: #0056b3;
}

@media (max-width: 992px) {
  .row-cols-md-2 {
    flex-direction: column;
  }
}

.animate {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;
}

.animate.fadeIn {
  opacity: 1;
  transform: translateY(0);
}
</style>
