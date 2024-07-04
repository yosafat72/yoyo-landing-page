<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" v-for="(service, index) in services" :key="index">
        <div class="card text-center elementor-widget-wrap h-100">
          <!-- Header -->
          <div class="card-header">
            <i :class="service.iconClass + ' fa-3x mb-3'"></i>
            <h5 class="card-title">{{ service.title }}</h5>
          </div>
          <!-- Body -->
          <div class="card-body">
            <p class="card-text">{{ service.description }}</p>
            <ul class="list-unstyled">
              <li v-for="(item, i) in service.details" :key="i">
                <i class="fas fa-dot-circle"></i> {{ item }}
              </li>
            </ul>
          </div>
          <!-- Footer -->
          <div class="card-footer">
            <a :href="service.link" class="btn btn-primary">BACA SELENGKAPNYA</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      services: [
        {
          iconClass: "far fa-window-restore",
          title: "LAYANAN",
          description: "Our company provides the following",
          details: [],
          link: "/service/",
        },
        {
          iconClass: "far fa-id-badge",
          title: "JASA KEPATUHAN PAJAK",
          description: "Konsultan Pajak, Kepatuhan Pajak Bulanan, Kepatuhan Pajak Tahunan",
          details: [
            "Konsultan Pajak",
            "Kepatuhan Pajak Bulanan",
            "Kepatuhan Pajak Tahunan",
          ],
          link: "/tax-compliance-service/",
        },
        {
          iconClass: "far fa-newspaper",
          title: "LITIGASI PAJAK",
          description: "Audit Pajak, Keberatan Pajak, Banding Pajak, Gugatan Pajak, Pengembalian Pajak",
          details: [
            "Audit Pajak",
            "Keberatan Pajak",
            "Banding Pajak",
            "Gugatan Pajak",
            "Pengembalian Pajak",
          ],
          link: "/tax-litigation-service/",
        },
        {
          iconClass: "far fa-chart-bar",
          title: "PELAYANAN STRATEGIS MANAJEMEN PERPAJAKAN",
          description: "Review Diagnostik Pajak, Uji Tuntas Pajak, Restrukturisasi Pajak, Layanan Penasihat Pajak",
          details: [
            "Review Diagnostik Pajak",
            "Uji Tuntas Pajak",
            "Restrukturisasi Pajak",
            "Layanan Penasihat Pajak",
          ],
          link: "/tax-management-strategic-service/",
        },
        {
          iconClass: "far fa-folder-open",
          title: "DOKUMENTASI PAJAK",
          description: "Dokumentasi Harga Transfer, Pendaftaran Dan Pengusaha PPN Deregistrasi, Layanan NPWP Tidak Efektif",
          details: [
            "Dokumentasi Harga Transfer",
            "Pendaftaran Dan Pengusaha PPN Deregistrasi",
            "Layanan NPWP Tidak Efektif",
          ],
          link: "/tax-documentation/",
        },
        {
          iconClass: "far fa-keyboard",
          title: "LAYANAN PAJAK LAINNYA",
          description: "Payroll, Pembukuan, Pelatihan Pajak",
          details: [
            "Payroll",
            "Pembukuan",
            "Pelatihan Pajak",
          ],
          link: "/other-tax-service/",
        },
      ],
    };
  },
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
