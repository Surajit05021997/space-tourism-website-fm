<template>
  <app-header />
  <main role="main">
    <router-view />
  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>
