<template>
  <div class="technology">
    <div class="technology-heading">
      <p class="heading-number">03</p>
      <p class="heading-text">SPACE LAUNCH 101</p>
    </div>
    <div class="technology-content">
      <div class="technology-text-content">
        <div class="technology-nav">
          <p
            v-for="(tech, index) in spaceData.technology"
            :key="tech.name"
            class="technology-nav-points"
            :class="tech.name === selectedTechnology.name ? 'active' : ''"
            @click="setSelectedTechnology(tech)"
          >
            {{ index+1 }}
        </p>
        </div>
        <div class="">
          <p class="technology-text">THE TERMINOLOGY…</p>
          <p class="technology-name">{{ selectedTechnology.name }}</p>
          <p class="technology-description">{{ selectedTechnology.description }}</p>
        </div>
      </div>
      <div class="technology-image">
        <picture>
          <source :srcset="require(`@/${selectedTechnology.images.landscape}`)" media="(max-width: 1023px)">
          <img :src="require(`@/${selectedTechnology.images.portrait}`)" alt="">
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
import spaceData from '@/data.json';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Technology',
  data() {
    return {
      spaceData,
    };
  },
  created() {
    if(!this.selectedTechnology) {
      this.setSelectedTechnologyAction(spaceData.technology[0]);
    }
  },
  computed: {
    ...mapState(['selectedTechnology']),
  },
  methods: {
    ...mapActions(['setSelectedTechnologyAction']),
    setSelectedTechnology(tech) {
      this.setSelectedTechnologyAction(tech);
    },
  },
};
</script>
