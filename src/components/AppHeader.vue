<template>
  <header>
    <img src="@/assets/shared/logo.svg" alt="">
    <div class="decorative-line"></div>
    <nav class="desktop-nav">
      <ul>
        <li>
          <router-link to="/home">HOME</router-link>
        </li>
        <li>
          <router-link to="/destination">DESTINATION</router-link>
        </li>
        <li>
          <router-link to="/crew">CREW</router-link>
        </li>
        <li>
          <router-link to="/technology">TECHNOLOGY</router-link>
        </li>
      </ul>
    </nav>
    <div class="mobile-menu">
      <img src="@/assets/hamburger-menu.svg" alt="" @click="openMobileNav()">
    </div>
    <nav class="mobile-nav" ref="mobileNav">
      <img class="close-button" src="@/assets/close-button.svg" alt="" @click="closeMobileNav()">
      <ul>
        <li>
          <router-link to="/home">HOME</router-link>
        </li>
        <li>
          <router-link to="/destination">DESTINATION</router-link>
        </li>
        <li>
          <router-link to="/crew">CREW</router-link>
        </li>
        <li>
          <router-link to="/technology">TECHNOLOGY</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    openMobileNav() {
      this.$refs.mobileNav.classList.add('active');
    },
    closeMobileNav() {
      this.$refs.mobileNav.classList.remove('active');
    },
  },
}
</script>
