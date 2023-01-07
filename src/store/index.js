import { createStore } from 'vuex';

const state = {
  selectedPlanet: null,
  selectedCrew: null,
  selectedTechnology: null,
};

const mutations = {
  UPDATE_SELECTED_PLANET(state, payload) {
    state.selectedPlanet = payload;
  },
  UPDATE_SELECTED_CREW(state, payload) {
    state.selectedCrew = payload;
  },
  UPDATE_SELECTED_TECHNOLOGY(state, payload) {
    state.selectedTechnology = payload;
  },
};

const actions = {
  setSelectedPlanetAction({ commit }, payload) {
    commit('UPDATE_SELECTED_PLANET', payload);
  },
  setSelectedCrewAction({ commit }, payload) {
    commit('UPDATE_SELECTED_CREW', payload);
  },
  setSelectedTechnologyAction({ commit }, payload) {
    commit('UPDATE_SELECTED_TECHNOLOGY', payload);
  },
};

const store = createStore({
  state,
  actions,
  mutations,
});

export default store;