<template>
  <div class="page-prefooter">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-3 col-sm-6 col-xs-12 footer-block about-us mb-4">
          <h2>About Us</h2>
          <p>This is the official website of the Financial Profession Development Center which contains applications and information about tax consultants officially registered with the Ministry of Finance.</p>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 footer-block contact mb-4">
          <h2>Contact</h2>
          <address>
            Subfield of Licensing Appraisers, Actuaries and Other Financial Professions<br>
            Financial Profession Development Center<br>
            Secretariat General of the Ministry of Finance<br>
            WA Center PPPK: 08158826288<br>
            Phone: 134<br>
            Email: <a href="mailto:Kemenkeu.prime@kemenkeu.go.id">Kemenkeu.prime@kemenkeu.go.id</a><br>
            Website: <a href="http://pppk.kemenkeu.go.id" target="_blank">pppk.kemenkeu.go.id</a>
          </address>
        </div>
        <div class="col-md-5 col-sm-6 col-xs-12 footer-block feedback mb-4">
          <h2>Feedback and Suggestions</h2>
          <address>
            Criticism and suggestions related to services can be submitted via:
            <ul>
              <li>WA Center PPPK: 08158826288</li>
              <li>Phone: 021-3843237</li>
              <li>Fax: 021-3508573</li>
              <li>Service complaints: email to <a href="mailto:Kemenkeu.prime@kemenkeu.go.id">Kemenkeu.prime@kemenkeu.go.id</a></li>
              <li>Non-service complaints: <a href="http://wise.kemenkeu.go.id" target="_blank">wise.kemenkeu.go.id</a> or <a href="http://lapor.go.id" target="_blank">lapor.go.id</a></li>
              <li>Mail: KKP Yoyo Lukasa Rukan Teuku Umar Blok D12-15, RT.004/RW.005, Karawaci, Kec. Karawaci, Kota Tangerang, Banten 15115, Indonesia </li>
            </ul>
          </address>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this simple footer
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-prefooter {
  background-color: #fef9f3;
  padding: 40px 0;
  border-top: 1px solid #dee2e6;
}

.footer-block {
  padding: 20px;
  margin-bottom: 20px; /* Adjusting margin to provide spacing */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #8d7557, #e8e5e3); /* Gradient background */
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-us {
  background: linear-gradient(135deg, #fef9f3, #fcdac5); /* Gradient for About Us */
}

.contact {
  background: linear-gradient(135deg, #fef9f3, #e7d4c0); /* Gradient for Contact */
}

.feedback {
  background: linear-gradient(135deg, #fef9f3, #f2e4d9); /* Gradient for Feedback */
}

.footer-block:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.footer-block h2 {
  font-weight: bold;
  margin-bottom: 15px;
  color: #343a40;
  font-size: 1.25rem;
}

.footer-block p, .footer-block address, .footer-block ul {
  color: #6c757d;
  margin-bottom: 15px;
  font-size: 0.875rem;
}

.footer-block a {
  color: #007bff;
  text-decoration: none;
}

.footer-block a:hover {
  text-decoration: underline;
}

.footer-block address {
  line-height: 1.5;
}

.footer-block ul {
  list-style: none;
  padding: 0;
}

.footer-block ul li {
  margin-bottom: 5px;
}

.footer-block ul li a {
  color: #007bff;
  text-decoration: none;
}

.footer-block ul li a:hover {
  text-decoration: underline;
}
</style>
