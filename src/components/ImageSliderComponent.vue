<template>
  <div class="container d-flex flex-column align-items-center mt-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold text-dark">Yoyo Lukasa S.E., BKP</h1>
      <p class="lead">
        Is a Tax Consultant Office in Tangerang which is managed by tax consultant consultants who have certification as Tax Consultants and Legal Counsel at the Tax Court who have provided the best tax services to all clients.
      </p>
      <div class="d-flex justify-content-center mt-5 mb-5">
        <a href="https://wa.me/628128286167" class="btn btn-success me-3" target="_blank">
          <i class="fab fa-whatsapp"></i> Contact Us on WhatsApp
        </a>
        <a href="https://wa.me/628128286167?text=I%20would%20like%20to%20schedule%20a%20consultation" class="btn btn-primary" target="_blank">
          <i class="fab fa-whatsapp"></i> Schedule a Consultation
        </a>
      </div>
    </div>
    <div class="carousel-container">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/YoyoDirectur.png" class="d-block w-100 rounded-img" height="350" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/taxPrep.png" class="d-block w-100 rounded-img" height="350" alt="...">
          </div>
          <div class="carousel-item">
            <img src="/is_banner_03.jpg" class="d-block w-100 rounded-img" height="350" alt="...">
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
// No script needed for this simple carousel
</script>

<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
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
</style>
