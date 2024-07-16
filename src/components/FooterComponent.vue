<template>
  <div class="page-prefooter">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-md-3 col-sm-6 col-xs-12 footer-block contact mb-2">
          <h2>Contact</h2>
          <address>
            Subfield of Licensing Appraisers, Actuaries and Other Financial Professions<br>
            Financial Profession Development Center<br>
            Secretariat General of the Ministry of Finance<br>
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png" alt="WhatsApp Logo" width="20" height="20" /> WA Center KKP: 
            <a href="https://wa.me/628158826288" target="_blank">08158826288</a>
          </address>
        </div>
        <div class="col-md-5 col-sm-6 col-xs-12 footer-block feedback mb-2">
          <h2>Feedback and Suggestions</h2>
          <address>
            Criticism and suggestions related to services can be submitted via:
            <ul>
              <li>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png" alt="WhatsApp Logo" width="20" height="20" /> WA Center KKP: 
                <a href="https://wa.me/628158826288" target="_blank">08158826288</a>
              </li>
              <li>
                <img src="https://cdn-icons-png.flaticon.com/512/854/854901.png" alt="Mail Logo" width="20" height="20" /> Address: 
                <a href="https://maps.app.goo.gl/Zk8RnWKc6Aktwnf76" target="_blank">KKP Yoyo Lukasa Rukan Teuku Umar Blok D12-15, RT.004/RW.005, Karawaci, Kec. Karawaci, Kota Tangerang, Banten 15115, Indonesia</a>
              </li>
              <li>
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email Logo" width="20" height="20" /> Email:
                <a href="mailto:kkpyoyolukasa@gmail.com">kkpyoyolukasa@gmail.com</a>, 
                <a href="mailto:yoyolukasa@yahoo.com">yoyolukasa@yahoo.com</a>
              </li>
            </ul>
          </address>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12 footer-block social-media mb-2">
          <h2>Follow Us on Social Media</h2>
          <div class="social-icons">
            <a href="https://www.instagram.com/lukasayoyo/" target="_blank" aria-label="Instagram">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram Logo" width="30" height="30" />
            </a>
            <a href="https://www.linkedin.com/in/kkp-yoyo-lukasa-840794ab/" target="_blank" aria-label="LinkedIn">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn Logo" width="30" height="30" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100069120551927" target="_blank" aria-label="Facebook">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook Logo" width="30" height="30" />
            </a>
            <a href="https://www.youtube.com/@KKPYoyoLukasa" target="_blank" aria-label="YouTube">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733646.png" alt="YouTube Logo" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'YL Consultan - About Us, Contact, Feedback, and Social Media',
  meta: [
    { name: 'description', content: 'Learn more about YL Consultan, including our mission, contact information, how to provide feedback, and follow us on social media. Find out how to reach us and our role in the Financial Profession Development Center.' },
    { name: 'keywords', content: 'YL Consultan, Financial Profession Development Center, tax consultants, contact information, feedback, suggestions, social media, Instagram, LinkedIn, Facebook, YouTube, Tangerang' }
  ]
});
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

@keyframes textGlow {
  0% {
    text-shadow: 0 0 2px #faf4e3, 0 0 5px #dbc486, 0 0 10px #faf4e3, 0 0 15px #faf4e3, 0 0 20px #faf4e3, 0 0 25px #85713a, 0 0 30px #faf4e3;
  }
  100% {
    text-shadow: 0 0 2px #e8d8c0, 0 0 5px #af8f5e, 0 0 10px #e8d8c0, 0 0 15px #e8d8c0, 0 0 20px #e8d8c0, 0 0 25px #e8d8c0, 0 0 30px #e8d8c0;
  }
}

.page-prefooter {
  padding: 40px 0;
  background-color: #000; /* Ensure contrast with black background */
}

.footer-block {
  padding: 20px;
  margin-bottom: 20px; /* Adjusting margin to provide spacing */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #ffffff, #f0f0f0); /* Gradient background */
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-us {
  background: linear-gradient(135deg, #ffffff, #f8f9fa); /* Light gradient for About Us */
}

.contact {
  background: linear-gradient(135deg, #ffffff, #e9ecef); /* Light gradient for Contact */
}

.feedback {
  background: linear-gradient(135deg, #ffffff, #f2f4f7); /* Light gradient for Feedback */
}

.social-media {
  background: linear-gradient(135deg, #ffffff, #f4f4f4); /* Light gradient for Social Media */
}

.footer-block:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.footer-block h2 {
  font-weight: bold;
  margin-bottom: 15px;
  color: black; /* Bright color for headers */
  font-size: 1.25rem;
  animation: textGlow 1.5s ease-in-out infinite; /* Glowing effect for headers */
}

.footer-block p, .footer-block address, .footer-block ul {
  color: #333; /* Darker text color for better contrast */
  margin-bottom: 15px;
  font-size: 0.875rem;
}

.footer-block a {
  color: #007bff; /* Link color for visibility */
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
  color: #007bff; /* Link color for visibility */
  text-decoration: none;
}

.footer-block ul li a:hover {
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icons img {
  transition: transform 0.3s ease;
}

.social-icons img:hover {
  transform: scale(1.1);
}
</style>
