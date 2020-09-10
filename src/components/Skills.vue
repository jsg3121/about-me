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
                <img
                  :src="skill.src"
                  @mouseover="skill.src = skill.overSrc"
                  @mouseleave="skill.src = skill.leaveSrc"
                />
              </figure>
            </li>
          </ul>
        </div>
        <div class="back-end">
          <h4>BACK-END</h4>
          <ul class="skill_list">
            <li v-for="skill in backEnd" :key="skill.id">
              <figure>
                <img
                  :src="skill.src"
                  alt
                  @mouseover="skill.src = skill.overSrc"
                  @mouseleave="skill.src = skill.leaveSrc"
                />
              </figure>
            </li>
          </ul>
        </div>
        <div class="etc">
          <h4>ETC</h4>
          <ul class="skill_list">
            <li v-for="skill in etc" :key="skill.id">
              <figure>
                <img
                  :src="skill.src"
                  alt
                  @mouseover="skill.src = skill.overSrc"
                  @mouseleave="skill.src = skill.leaveSrc"
                />
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
  created() {
    this.frontEnd = this.$store.state.frontEnd;
    this.backEnd = this.$store.state.backEnd;
    this.etc = this.$store.state.etc;
  },
  data() {
    return {
      mouseOver: false,
      frontEnd: [],
      backEnd: [],
      etc: [],
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
        margin-left: 2.5rem;
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