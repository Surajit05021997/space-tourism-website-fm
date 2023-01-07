<template>
  <header>
    <img src="@/assets/shared/logo.svg" alt="">
    <div class="decorative-line"></div>
    <nav>
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
}
</script>
