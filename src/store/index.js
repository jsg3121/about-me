import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  // export const store = new Vuex.Store({
  state: {
    detailIndex: 0,
    project: [
      {
        projectNum: 1,
        projectName: "Prius C Crossover Detail page",
        subName: "Toyota",
        members: [{ id: 1, member: "1명(Frontend 100%)" }],
        date: "2020-01 ~ 2020-03",
        thumbnail: require("../assets/image/toyota_thumbnail.png"),
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
        ],
        skills: [
          { id: 1, skill: "JavaScript" },
          { id: 2, skill: "HTML" },
          { id: 3, skill: "CSS" }
        ],
        alert: "* 작업기간 이후의 수정사항으로 이미지와 다를 수 있습니다."
      },
      {
        projectNum: 2,
        projectName: "Information on Cultural Events",
        subName: "CultureProject",
        members: [{ id: 1, member: "1명(frontend, backend 100%)" }],
        date: "2020-08 ~ 2020-09",
        thumbnail: require("../assets/image/culture_thumbnail.png"),
        img_src: [
          { id: 1, src: require("../assets/image/culture_project_1.webm") },
          { id: 2, src: require("../assets/image/culture_project_2.png") },
          { id: 3, src: require("../assets/image/culture_project_3.png") },
          { id: 4, src: require("../assets/image/culture_project_4.png") },
          { id: 5, src: require("../assets/image/culture_project_5.png") }
        ],
        skills: [
          { id: 1, skill: "Vue.js" },
          { id: 2, skill: "Node.js" },
          { id: 3, skill: "Express.js" },
          { id: 4, skill: "JavaScript" },
          { id: 5, skill: "SCSS" }
        ]
      },
      {
        projectNum: 3,
        projectName: "Kisan Management System",
        subName: "KISAN",
        date: "2020-06 ~ 2020-08",
        members: [{ id: 1, member: "1명(화면 및 기능구현)" }],
        thumbnail: require("../assets/image/kisan_thumbnail.png"),
        img_src: [
          {
            id: 1,
            src: require("../assets/image/kisan_1.png")
          },
          {
            id: 2,
            src: require("../assets/image/kisan_2.png")
          },
          {
            id: 3,
            src: require("../assets/image/kisan_3.png")
          },
          {
            id: 4,
            src: require("../assets/image/kisan_4.png")
          }
        ],
        skills: [
          { id: 1, skill: "JavaScript" },
          { id: 2, skill: "Jquery" },
          { id: 3, skill: "HTML" },
          { id: 4, skill: "CSS" }
        ]
      }
    ]
  },
  mutations: {
    dataIndex: function(state, data) {
      console.log(data);
      state.dataIndex = data;
    }
  },
  plugins: [createPersistedState()]
});
