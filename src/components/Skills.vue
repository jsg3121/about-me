<template>
  <div class="skills-container">
    <div class="skills-content">
      <h2>SKILLS</h2>
      <div class="inner-container">
        <div class="front-end">
          <h4>FRONT-END</h4>
          <ul class="skill_list">
            <li v-for="skill in frontEnd" :key="skill.id">
              <figure>
                <img :src="skill.src" alt />
              </figure>
            </li>
          </ul>
        </div>
        <div class="back-end">
          <h4>BACK-END</h4>
          <ul class="skill_list">
            <li v-for="skill in backEnd" :key="skill.id">
              <figure>
                <img :src="skill.src" alt />
              </figure>
            </li>
          </ul>
        </div>
        <div class="etc">
          <h4>ETC</h4>
          <ul class="skill_list">
            <li v-for="skill in etc" :key="skill.id">
              <figure>
                <img :src="skill.src" alt />
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      frontEnd: [
        { id: 1, grade: "", src: require("../assets/image/html-n@2x.png") },
        { id: 2, grade: "", src: require("../assets/image/css-n@2x.png") },
        { id: 3, grade: "", src: require("../assets/image/js-n@2x.png") },
        { id: 4, grade: "", src: require("../assets/image/jquery-n@2x.png") },
        { id: 5, grade: "", src: require("../assets/image/vue-js-n@2x.png") },
      ],
      backEnd: [
        { id: 1, grade: "", src: require("../assets/image/java-n@2x.png") },
        { id: 2, grade: "", src: require("../assets/image/node-n@2x.png") },
        { id: 3, grade: "", src: require("../assets/image/express-n@2x.png") },
        { id: 4, grade: "", src: require("../assets/image/oracle-n@2x.png") },
        { id: 5, grade: "", src: require("../assets/image/tomcat-n@2x.png") },
        { id: 6, grade: "", src: require("../assets/image/spring-n@2x.png") },
      ],
      etc: [
        { id: 1, grade: "", src: require("../assets/image/psd-n@2x.png") },
        { id: 2, grade: "", src: require("../assets/image/affect-n@2x.png") },
      ],
    };
  },
};
</script>

<style lang="scss">
.skills-container {
  width: 100%;
  background-color: #eceef0;
  padding-top: 8.125rem;

  .skills-content {
    max-width: 1280px;
    margin: 0 auto;

    h2 {
      width: 100%;
      font-family: "Montserrat";
      font-size: 2.875rem;
      font-weight: bold;
      text-align: center;
      color: #000f2a;
    }
  }

  .inner-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    > div {
      h4 {
        font-family: "Montserrat";
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1;
        text-align: left;
        color: #4d5772;
        margin-bottom: 1.375rem;
        padding-top: 1.8125rem;
      }

      @media screen and (max-width: 1280px) {
        h4 {
          margin-left: 1.25rem;
        }
      }
    }

    .front-end {
      width: 100%;
      margin-top: 3.25rem;
      padding-bottom: 1.4375rem;
      border-bottom: 1px solid #d7d7d7;

      .skill_list {
        display: flex;
        align-items: center;

        li {
          width: 20%;
          height: 100%;
          text-align: center;

          figure {
            width: 10.25rem;
            height: 10.25rem;
            margin: 0 auto;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .back-end {
      width: 60%;
      height: 28.4375rem;
      border-right: 1px solid #d7d7d7;

      .skill_list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 23.75rem;

        li {
          width: calc(100% / 3);
          height: 50%;
          text-align: center;

          figure {
            width: 10.25rem;
            height: 10.25rem;
            margin: 0 auto;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .etc {
      width: 40%;
      height: 28.4375rem;
      border-right: 1px solid #d7d7d7;

      .skill_list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 23.75rem;

        li {
          width: 50%;
          height: 100%;
          text-align: center;

          figure {
            width: 10.25rem;
            height: 10.25rem;
            margin: 0 auto;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>