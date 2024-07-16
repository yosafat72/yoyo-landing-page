<template>
  <div class="container d-flex flex-column align-items-center mt-5">
    <div class="text-center mb-5">
      <div class="license-info animate">
        <h1 class="fw-bold text-dark mb-2">Yoyo Lukasa S.E., BKP</h1>
        <p class="lead italic-text mb-5">
          Tax Consultant Office in Tangerang which is managed by tax consultant consultants who have certification as Tax Consultants and Legal Counsel at the Tax Court who have provided the best tax services to all clients.
        </p>
        <div class="d-flex justify-content-center mt-5" style="padding-top: 30px;">
          <a href="https://wa.me/628158826288?text=I%20would%20like%20to%20schedule%20a%20consultation" class="btn btn-dark-blue me-3" target="_blank">
            <i class="fab fa-whatsapp"></i> Contact Us 
          </a>
        </div>
      </div>
    </div>
    <div class="carousel-container">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/YoyoDirectur.png" class="d-block w-100 rounded-img" height="350" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/taxPrep.png" class="d-block w-100 rounded-img" height="350" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useHead } from '@vueuse/head';

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
  title: 'Yoyo Lukasa S.E., BKP - Tax Consultant in Tangerang',
  meta: [
    { name: 'description', content: 'Yoyo Lukasa S.E., BKP is a premier tax consultant office in Tangerang, managed by certified tax consultants and legal counselors providing top-notch tax services.' },
    { name: 'keywords', content: 'Yoyo Lukasa, tax consultant, Tangerang, tax services, tax consultancy, legal counsel' },
    { property: 'og:title', content: 'Yoyo Lukasa S.E., BKP - Tax Consultant in Tangerang' },
    { property: 'og:description', content: 'Yoyo Lukasa S.E., BKP is a leading tax consultant office in Tangerang, offering expert tax consulting and legal counsel services.' },
    { property: 'og:image', content: '/YoyoDirectur.png' },
    { property: 'og:type', content: 'website' }
  ]
});
</script>

<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  background-size: cover; /* Ensure the background image covers the area */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent repeating the background image */
  border-radius: 15px; /* Curved edges for the container */
  padding: 10px; /* Add some padding around the carousel */
}

.carousel-inner {
  border-radius: 15px; /* Add curved edges to the inner carousel */
  overflow: hidden; /* Ensure images do not overflow their container */
}

.carousel-item img {
  width: 100%; /* Ensure the image covers the entire width of the container */
  height: auto; /* Maintain the aspect ratio of the image */
  object-fit: cover; /* Cover the container while maintaining aspect ratio */
  border-radius: 15px; /* Add curved edges to the images */
}

.license-info {
  background: rgba(117, 114, 108, 0.6);
  backdrop-filter: blur(4px); /* Blur effect */
  padding: 60px;
  padding-bottom: 90px;
  padding-top: 120px;
  border-radius: 15px; /* Curved edges for the container */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add some shadow for better contrast */
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

.btn {
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 25px; /* Curved edges for buttons */
}

.btn i {
  margin-right: 5px;
}

.btn-success {
  background-color: #25D366; /* WhatsApp green */
  border: none;
}

.btn-success:hover {
  background-color: #1DA851; /* Darker green for hover effect */
}

.btn-primary {
  background-color: #007bff; /* Bootstrap primary color */
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3; /* Darker blue for hover effect */
}

.italic-text {
  font-style: italic;
  font-size: medium;
}

.btn-dark-blue {
  background-color: #003366; /* Dark blue */
  border-color: #003366; /* Dark blue */
  color: #ffffff; /* White text */
}

.btn-dark-blue:hover {
  background-color: #002244; /* Even darker blue for hover effect */
  border-color: #002244; /* Matching border color */
}

</style>
