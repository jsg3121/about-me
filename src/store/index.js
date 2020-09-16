import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  // export const store = new Vuex.Store({
  state: {
    project: [
      {
        projectNum: 1,
        projectName: "Culture Poreject",
        thumbnail: require("../assets/image/culture_project.png"),
        img_src: [
          { id: 1, src: require("../assets/image/culture_project_3.png") },
          { id: 2, src: require("../assets/image/culture_project_4.png") },
          { id: 3, src: require("../assets/image/culture_project_5.png") },
          { id: 4, src: require("../assets/image/culture_project_6.png") },
          { id: 5, src: require("../assets/image/culture_project_7.png") }
        ]
      },
      {
        projectNum: 2,
        projectName: "Toyota PriusC Crossover",
        thumbnail: require("../assets/image/toyota.png"),
        img_src: [
          {
            id: 1,
            src: require("../assets/image/toyota_3.png")
          },
          {
            id: 2,
            src: require("../assets/image/toyota_4.png")
          },
          {
            id: 3,
            src: require("../assets/image/toyota_5.png")
          }
        ]
      },
      {
        projectNum: 3,
        projectName: "KISAN ELECTRONICS",
        thumbnail: require("../assets/image/kisan.png"),
        img_src: [
          {
            id: 1,
            src: require("../assets/image/kisan_2.png")
          },
          {
            id: 2,
            src: require("../assets/image/kisan_3.png")
          },
          {
            id: 3,
            src: require("../assets/image/kisan_4.png")
          },
          {
            id: 4,
            src: require("../assets/image/kisan_5.png")
          }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
});
