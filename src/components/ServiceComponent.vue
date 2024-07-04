<template>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card text-center elementor-widget-wrap h-100">
            <div class="card-body">
              <i class="far fa-window-restore fa-3x mb-3"></i>
              <h5 class="card-title">LAYANAN</h5>
              <p class="card-text">Our company provides the following</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center elementor-widget-wrap h-100">
            <div class="card-body">
              <i class="far fa-id-badge fa-3x mb-3"></i>
              <h5 class="card-title">JASA KEPATUHAN PAJAK</h5>
              <ul class="list-unstyled">
                <li><i class="fas fa-dot-circle"></i> Konsultan Pajak</li>
                <li><i class="fas fa-dot-circle"></i> Kepatuhan Pajak Bulanan</li>
                <li><i class="fas fa-dot-circle"></i> Kepatuhan Pajak Tahunan</li>
              </ul>
              <a href="/tax-compliance-service/" class="btn btn-primary">BACA SELENGKAPNYA</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center elementor-widget-wrap h-100">
            <div class="card-body">
              <i class="far fa-newspaper fa-3x mb-3"></i>
              <h5 class="card-title">LITIGASI PAJAK</h5>
              <ul class="list-unstyled">
                <li><i class="fas fa-dot-circle"></i> Audit Pajak</li>
                <li><i class="fas fa-dot-circle"></i> Keberatan Pajak</li>
                <li><i class="fas fa-dot-circle"></i> Banding Pajak</li>
                <li><i class="fas fa-dot-circle"></i> Gugatan Pajak</li>
                <li><i class="fas fa-dot-circle"></i> Pengembalian Pajak</li>
              </ul>
              <a href="/tax-litigation-service/" class="btn btn-primary">BACA SELENGKAPNYA</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center elementor-widget-wrap h-100">
            <div class="card-body">
              <i class="far fa-chart-bar fa-3x mb-3"></i>
              <h5 class="card-title">PELAYANAN STRATEGIS MANAJEMEN PERPAJAKAN</h5>
              <ul class="list-unstyled">
                <li><i class="fas fa-dot-circle"></i> Review Diagnostik Pajak</li>
                <li><i class="fas fa-dot-circle"></i> Uji Tuntas Pajak</li>
                <li><i class="fas fa-dot-circle"></i> Restrukturisasi Pajak</li>
                <li><i class="fas fa-dot-circle"></i> Layanan Penasihat Pajak</li>
              </ul>
              <a href="/tax-management-strategic-service/" class="btn btn-primary">BACA SELENGKAPNYA</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center elementor-widget-wrap h-100">
            <div class="card-body">
              <i class="far fa-folder-open fa-3x mb-3"></i>
              <h5 class="card-title">DOKUMENTASI PAJAK</h5>
              <ul class="list-unstyled">
                <li><i class="fas fa-dot-circle"></i> Dokumentasi Harga Transfer</li>
                <li><i class="fas fa-dot-circle"></i> Pendaftaran Dan Pengusaha PPN Deregistrasi</li>
                <li><i class="fas fa-dot-circle"></i> Layanan NPWP Tidak Efektif</li>
              </ul>
              <a href="/tax-documentation/" class="btn btn-primary">BACA SELENGKAPNYA</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center elementor-widget-wrap h-100">
            <div class="card-body">
              <i class="far fa-keyboard fa-3x mb-3"></i>
              <h5 class="card-title">LAYANAN PAJAK LAINNYA</h5>
              <ul class="list-unstyled">
                <li><i class="fas fa-dot-circle"></i> Payroll</li>
                <li><i class="fas fa-dot-circle"></i> Pembukuan</li>
                <li><i class="fas fa-dot-circle"></i> Pelatihan Pajak</li>
              </ul>
              <a href="/other-tax-service/" class="btn btn-primary">BACA SELENGKAPNYA</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Services",
  };
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
    background-color: rgba(64, 84, 178, 0.9); /* Warna dengan opasitas 0.9 */
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
  