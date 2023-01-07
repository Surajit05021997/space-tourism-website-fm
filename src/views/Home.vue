<template>
  <div class="home">
    <div class="home-text-content">
      <p class="home-sub-heading">SO, YOU WANT TO TRAVEL TO</p>
      <h1 class="home-heading">SPACE</h1>
      <p>Let’s face it; if you want to go to space, you might as well genuinely go
        to outer space and not hover kind of on the edge of it. Well sit back,
        and relax because we’ll give you a truly out of this world experience!</p>
    </div>
    <button class="home-button" @click="navigateToDestination">EXPLORE</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    navigateToDestination() {
      this.$router.push('/destination');
    },
  },
};
</script>
