<template>
  <router-view></router-view>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'KKP Yoyo Lukasa',
  meta: [
    { name: 'description', content: 'Website Kantor Konsultan Pajak Yoyo Lukasa, penyedia layanan konsultasi pajak profesional di Tangerang.' },
    { name: 'keywords', content: 'KKP Yoyo Lukasa, YL Consultan, Tangerang, KKP Tangerang, konsultan pajak, konsultasi pajak Tangerang, layanan pajak, perencanaan pajak, penghematan pajak, pajak perusahaan, audit pajak, kepatuhan pajak, pajak individu' }
  ]
})
</script>
