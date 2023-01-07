<template>
  <div class="destination">
    <div class="destination-heading">
      <p class="heading-number">01</p>
      <p class="heading-text">Pick your destination</p>
    </div>
    <div class="destination-content">
      <img :src="require(`../${selectedPlanet.images.png}`)" alt="" class="destination-image">
      <div>
        <nav class="planet-navigation">
          <p
            v-for="planet in spaceData.destinations"
            :key="planet.name"
            @click="setSelectedPlanet(planet)"
            :class="selectedPlanet.name === planet.name ? 'active' : ''"
          >
            {{ planet.name }}
          </p>
        </nav>
        <div class="destination-text-content">
          <p class="planet-name">{{ selectedPlanet.name }}</p>
          <p class="planet-description">{{ selectedPlanet.description }}</p>
          <hr>
          <div class="planet-info">
            <div>
              <p class="planet-info-text">AVG. DISTANCE</p>
              <p class="planet-info-value">{{ selectedPlanet.distance }}</p>
            </div>
            <div>
              <p class="planet-info-text">EST. TRAVEL TIME</p>
              <p class="planet-info-value">{{ selectedPlanet.travel }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spaceData from '@/data.json';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Destination',
  data() {
    return {
      spaceData,
    };
  },
  computed: {
    ...mapState(['selectedPlanet']),
  },
  created() {
    if(!this.selectedPlanet) {
      this.setSelectedPlanetAction(spaceData.destinations[0]);
    }
  },
  methods: {
    ...mapActions(['setSelectedPlanetAction']),
    setSelectedPlanet(planet) {
      this.setSelectedPlanetAction(planet);
    },
  },
};
</script>
