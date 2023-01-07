<template>
  <div class="crew">
    <div class="crew-heading">
      <p class="heading-number">02</p>
      <p class="heading-text">Meet your crew</p>
    </div>
    <div class="crew-content">
      <div class="crew-text-content">
        <p class="crew-role">{{ selectedCrew.role }}</p>
        <p class="crew-name">{{ selectedCrew.name }}</p>
        <p class="crew-bio">{{ selectedCrew.bio }}</p>
        <div class="crew-navigation">
          <div v-for="crew in spaceData.crew" :key="crew.name" class="crew-bullet-points" :class="selectedCrew.name === crew.name ? 'active' : ''" @click="setSelectedCrew(crew)"></div>
        </div>
      </div>
      <div class="crew-image">
        <img :src="require(`@/${selectedCrew.images.png}`)" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import spaceData from '@/data.json';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Crew',
  data() {
    return {
      spaceData,
    };
  },
  created() {
    if(!this.selectedCrew) {
      this.setSelectedCrewAction(spaceData.crew[0]);
    }
  },
  computed: {
    ...mapState(['selectedCrew']),
  },
  methods: {
    ...mapActions(['setSelectedCrewAction']),
    setSelectedCrew(crew) {
      this.setSelectedCrewAction(crew);
    }
  },
};
</script>
