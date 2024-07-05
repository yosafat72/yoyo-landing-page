<template>
  <div class="container d-flex align-items-center justify-content-center">
      <div class="text-center">
          <h3 class="fw-bold" style="color: black;">Comprehensive Tax Solutions</h3>
          <p class="lead">Tailored Expertise for Your Unique Needs</p>
      </div>
  </div>
  <div class="container">
    <div class="row g-4">
      <div class="col-md-3">
        <div class="card p-1" style="width: 16rem; min-width: 14rem; height: 100%;">
          <img src="/img_tax_planning.jpg" class="card-img-top rounded" alt="..." style="height: 175px;">
          <div class="card-body">
              <div class="card-title">
                  <div class="fw-bold" style="font-size: 14px;">Tax Planning and Compliance</div>
              </div>
              <div class="card-text fw-light" style="font-size: 12px;">
                  Comprehensive tax planning and compliance services tailored to meet your unique needs.
              </div>
              <div class="card-text fw-light">
                  <router-link to="/tax-planning" class="text-decoration-none fw-medium" style="font-size: 14px; color: #E5E483;"><u>Learn More</u></router-link>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-1" style="width: 16rem; min-width: 14rem; height: 100%;">
          <img src="/img_business_tax.jpg" class="card-img-top rounded" alt="..." style="height: 175px;">
          <div class="card-body">
              <div class="card-title">
                  <div class="fw-bold" style="font-size: 14px;">Business Tax Services</div>
              </div>
              <div class="card-text fw-light" style="font-size: 12px;">
                  Specialized tax solutions for businesses of all sizes, aimed at minimizing tax liabilities and maximizing profitability.
              </div>
              <div class="card-text fw-light">
                  <router-link to="/tax-planning" class="text-decoration-none fw-medium" style="font-size: 14px; color: #E5E483;"><u>Learn More</u></router-link>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-1" style="width: 16rem; min-width: 14rem; height: 100%;">
          <img src="/img_individual_tax.jpg" class="card-img-top rounded" alt="..." style="height: 175px;">
          <div class="card-body">
              <div class="card-title">
                  <div class="fw-bold" style="font-size: 14px;">Individual Tax Services</div>
              </div>
              <div class="card-text fw-light" style="font-size: 12px;">
                  Personalized tax consulting for individuals, ensuring accurate and timely tax filings.
              </div>
              <div class="card-text fw-light">
                  <router-link to="/tax-planning" class="text-decoration-none fw-medium" style="font-size: 14px; color: #E5E483;"><u>Learn More</u></router-link>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-1" style="width: 16rem; min-width: 14rem; height: 100%;">
          <img src="/img_audit_support.jpg" class="card-img-top rounded" alt="..." style="height: 175px;">
          <div class="card-body">
              <div class="card-title">
                  <div class="fw-bold" style="font-size: 14px;">Audit Support</div>
              </div>
              <div class="card-text fw-light" style="font-size: 12px;">
                  Expert assistance in preparing for and navigating tax audits, reducing stress and potential liabilities.
              </div>
              <div class="card-text fw-light">
                  <router-link to="/tax-planning" class="text-decoration-none fw-medium" style="font-size: 14px; color: #E5E483;"><u>Learn More</u></router-link>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-1" style="width: 16rem; min-width: 14rem; height: 100%;">
          <img src="/img_consulting.jpg" class="card-img-top rounded" alt="..." style="height: 175px;">
          <div class="card-body">
              <div class="card-title">
                  <div class="fw-bold" style="font-size: 14px;">Consulting and Advisory</div>
              </div>
              <div class="card-text fw-light" style="font-size: 12px;">
                  Strategic advice on tax implications of financial decisions, helping you make informed choices.
              </div>
              <div class="card-text fw-light">
                  <router-link to="/tax-planning" class="text-decoration-none fw-medium" style="font-size: 14px; color: #E5E483;"><u>Learn More</u></router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</style>
