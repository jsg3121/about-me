<template>
  <div class="detail-container">
    <vueHeader></vueHeader>
    <div class="detail-content">
      <div
        class="conetnt_background"
        :style="{background: 'url('+ detailData[detailIndex].thumbnail +') top/cover no-repeat'}"
      >
        <div class="content_title">
          <button class="prev_card" @click="prevData"></button>
          <h1>{{detailData[detailIndex].projectName}}</h1>
          <button class="next_card" @click="nextData"></button>
        </div>
      </div>
      <div class="content_description">
        <div class="description">
          <div class="description_slide">
            <button class="prev_card"></button>
            <div class="slide_box">
              <ul class="slide_list">
                <li
                  class="slide_item"
                  v-for="item in detailData[detailIndex].img_src"
                  :key="item.id"
                >
                  <figure>
                    <img :src="item.src" alt />
                  </figure>
                </li>
              </ul>
              <ul class="slide_indicate">
                <!-- <li></li>
                <li class="select"></li>
                <li></li>
                <li></li>-->
              </ul>
            </div>
            <button class="next_card"></button>
          </div>
          <div class="description_text">
            <div>
              <div class="text_title">
                <figure>
                  <img src="../assets/image/people-icon.png" alt />
                </figure>
                <h3>참여인원</h3>
                <h4>Team Members</h4>
              </div>
              <ul class="text_conetnt">
                <li v-for="list in detailData[detailIndex].members" :key="list.id">
                  <p>{{list.member}}</p>
                </li>
              </ul>
            </div>
            <div>
              <div class="text_title">
                <figure>
                  <img src="../assets/image/date-icon.png" alt />
                </figure>
                <h3>제작기간</h3>
                <h4>Working Date</h4>
              </div>
              <ul class="text_conetnt">
                <li>
                  <p
                    class="alert"
                    v-if="detailData[detailIndex].alert != ''"
                  >{{detailData[detailIndex].alert}}</p>
                  <p>{{detailData[detailIndex].date}}</p>
                </li>
              </ul>
            </div>
            <div>
              <div class="text_title">
                <figure>
                  <img src="../assets/image/skill-icon.png" alt />
                </figure>
                <h3>사용기술</h3>
                <h4>Skills</h4>
              </div>
              <ul class="text_conetnt">
                <li v-for="list in detailData[detailIndex].skills" :key="list.id">
                  <p>{{list.skill}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
import vueFooter from "../components/Footer";
export default {
  components: {
    vueHeader,
    vueFooter,
  },
  created() {},
  data() {
    return {
      detailIndex: this.$store.state.dataIndex,
      detailData: this.$store.state.project,
    };
  },
  methods: {
    prevData: function () {
      if (this.detailIndex > 0) {
        this.detailIndex--;
      }
    },
    nextData: function () {
      if (this.detailIndex < this.detailData.length - 1) {
        this.detailIndex++;
      }
    },
  },
};
</script>

<style lang="scss">
.detail-container {
  width: 100%;

  .detail-content {
    width: 100%;

    .conetnt_background {
      width: 100%;
      height: 37.5rem;
      position: relative;

      &:before {
        content: "";
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.3);
      }

      .content_title {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        position: relative;

        h1 {
          width: 80%;
          position: absolute;
          left: 50%;
          top: 12.5rem;
          transform: translateX(-50%);
          font-family: "Montserrat";
          font-size: 3.525rem;
          font-weight: 600;
          text-align: center;
          color: #ffffff;
          text-shadow: 0.125rem 0.1875rem 0.5625rem #4e4e4e;
        }

        .prev_card {
          width: 3.75rem;
          height: 3.75rem;
          position: absolute;
          left: 1.0625rem;
          top: 12.5rem;
          background: rgba(255, 255, 255, 0.3)
            url(../assets/image/left-arrow.png) center/contain no-repeat;
          box-shadow: 0px 0.25rem 0.625rem 0 rgba(0, 15, 42, 0.3);
          z-index: 10;
          border: 0;

          &:hover {
            background-color: rgba(0, 86, 245, 0.3);
          }

          &:active {
            background-color: rgba(0, 64, 182, 0.5);
          }
        }

        .next_card {
          width: 3.75rem;
          height: 3.75rem;
          position: absolute;
          right: 1.0625rem;
          top: 12.5rem;
          background: rgba(255, 255, 255, 0.3)
            url(../assets/image/right-arrow.png) center/contain no-repeat;
          box-shadow: 0px 0.25rem 0.625rem 0 rgba(0, 15, 42, 0.3);
          z-index: 10;
          border: 0;

          &:hover {
            background-color: rgba(0, 86, 245, 0.3);
          }

          &:active {
            background-color: rgba(0, 64, 182, 0.5);
          }
        }
      }
    }

    .content_description {
      width: 100%;
      position: relative;
      margin-bottom: -12.5rem;

      .description {
        width: 100%;
        max-width: 1280px;
        height: 69.9375rem;
        margin: 0 auto;
        position: relative;
        top: -12.5rem;
        background-color: #ffffff;

        .description_slide {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 5.8125rem;

          .slide_box {
            width: 67.5rem;
            height: 37.5rem;
            background-color: #e1e1e1;
            position: relative;
            overflow: hidden;

            .slide_list {
              display: flex;

              .slide_item {
                figure {
                  width: 67.5rem;
                  height: 37.5rem;

                  img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                  }
                }
              }
            }

            .slide_indicate {
              display: flex;
              align-items: center;
              position: absolute;
              bottom: 1.875rem;
              left: 50%;
              transform: translateX(-50%);

              li {
                width: 0.75rem;
                height: 0.75rem;
                background-color: #a2a3a5;
                border-radius: 50%;
                margin-right: 0.9375rem;
                cursor: pointer;

                &:last-child {
                  margin-right: 0;
                }

                &.select {
                  width: 1.5rem;
                  height: 1.5rem;
                  background-color: #1a2840;
                  border: 0.375rem solid #a2a3a5;
                }
              }
            }
          }

          button {
            width: 1.875rem;
            height: 2.375rem;
            border: 0;

            &.prev_card {
              background: url(../assets/image/slider-arrow-left.png)
                center/contain no-repeat;
              margin-right: 1.375rem;
              &:active {
                background-color: rgba(175, 175, 175, 0.3);
              }
            }
            &.next_card {
              background: url(../assets/image/slider-arrow-right.png)
                center/contain no-repeat;
              margin-left: 1.375rem;
              &:active {
                background-color: rgba(175, 175, 175, 0.3);
              }
            }
          }
        }

        .description_text {
          width: 67.5rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 3.75rem auto 0;

          > div {
            width: 21.25rem;
            text-align: center;

            .text_title {
              border-bottom: solid 1px #d7d7d7;
              margin-bottom: 2.5rem;

              figure {
                width: 3.375rem;
                height: 3.375rem;
                margin: 0 auto 0.25rem;

                img {
                  width: 100%;
                  height: 100%;
                }
              }

              h3 {
                width: 100%;
                height: 1.625rem;
                font-size: 1.5rem;
                font-weight: bold;
                line-height: 1.08;
                text-align: center;
                color: #000f2a;
                margin-bottom: 0.625rem;
              }

              h4 {
                width: 100%;
                height: 1.1875rem;
                font-family: "Montserrat";
                font-size: 1rem;
                font-weight: 300;
                line-height: 1.18;
                text-align: center;
                color: #797d84;
                margin-bottom: 1.875rem;
              }
            }
          }

          .text_conetnt {
            width: 100%;
            min-height: 9rem;
            text-align: center;

            li {
              width: 100%;
              height: 1.75rem;
              position: relative;

              p {
                font-size: 1.25rem;
                font-weight: normal;
                line-height: 1.4;
                text-align: center;
                color: #4d5772;
              }

              .alert {
                font-size: 0.75rem;
                position: absolute;
                top: -3.5625rem;
                color: #8a8a8a;
              }
            }
          }
        }
      }
    }
  }
}
</style>