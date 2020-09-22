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
            <button class="prev_card" @click="prevList"></button>
            <div class="slide_box">
              <ul class="slide_list" :style="{transform: 'translateX(-'+(listIndex * 100)+'%)'}">
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
              <ul
                class="slide_indicate"
                :style="{width : ((12 * detailData[detailIndex].img_src.length) + (15 * (detailData[detailIndex].img_src.length - 1)) + 12) / 16 + 'rem'} "
              >
                <li v-for="list in detailData[detailIndex].img_src" :key="list.id"></li>
              </ul>
            </div>
            <button class="next_card" @click="nextList"></button>
            <p
              class="alert"
              v-if="detailData[detailIndex].alert != ''"
            >{{detailData[detailIndex].alert}}</p>
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
  mounted() {
    let list = document.querySelectorAll(".slide_indicate li");
    list[0].classList.add("select");
    this.listIndex = 0;
  },
  data() {
    return {
      listIndex: 0,
      detailIndex: this.$store.state.dataIndex,
      detailData: this.$store.state.project,
    };
  },
  methods: {
    prevData: function () {
      if (this.detailIndex > 0) {
        this.detailIndex--;
        this.resetSlide();
      }
    },
    nextData: function () {
      if (this.detailIndex < this.detailData.length - 1) {
        this.detailIndex++;
        this.resetSlide();
      }
    },
    prevList: function () {
      if (this.listIndex > 0) {
        this.listIndex--;
        console.log(this.listIndex);
        this.activeIndi();
      }
    },
    nextList: function () {
      if (
        this.listIndex <
        this.detailData[this.detailIndex].img_src.length - 1
      ) {
        this.listIndex++;
        console.log(this.listIndex);
        this.activeIndi();
      }
    },
    activeIndi: function () {
      let item = document.querySelectorAll(".slide_indicate li");
      item.forEach((i) => {
        i.classList.remove("select");
      });
      item[this.listIndex].classList.add("select");
    },
    resetSlide: function () {
      this.listIndex = 0;
      this.activeIndi();
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
        background-color: rgba(0, 0, 0, 0.5);
      }

      .content_title {
        width: 100%;
        max-width: 1280px;
        height: 100%;
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
              transition: transform 0.4s;

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
              height: 1.5rem;

              li {
                width: 0.75rem;
                height: 0.75rem;
                background-color: #a2a3a5;
                border-radius: 50%;
                margin-right: 0.9375rem;
                cursor: pointer;
                transition: width 0.3s, height 0.3s;

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
          .alert {
            font-size: 0.9rem;
            position: absolute;
            bottom: -1.3rem;
            left: 0;
            color: #8a8a8a;
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
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 979px) {
  .detail-container {
    .detail-content {
      .conetnt_background {
        .content_title {
          .prev_card,
          .next_card {
            top: 50%;
            transform: translateY(-50%);
          }
          h1 {
            font-size: 3rem;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }

      .content_description {
        margin-bottom: 0;
        .description {
          width: 80%;
          top: 0;

          .description_slide {
            position: relative;

            .prev_card {
              position: absolute;
              left: -2rem;
              z-index: 15;
              margin-right: 0;
            }

            .next_card {
              position: absolute;
              right: -2rem;
              z-index: 15;
              margin-left: 0;
            }

            .slide_box {
              width: 100%;
              height: 32.5rem;

              .slide_list {
                .slide_item {
                  figure {
                    width: 80vw;
                    height: 32.5rem;
                  }
                }
              }
            }
          }

          .description_text {
            width: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 639px) {
  .detail-container {
    .detail-content {
      .conetnt_background {
        height: 28.5rem;
        .content_title {
          h1 {
            font-size: 2.5rem;
          }
        }
      }

      .content_description {
        .description {
          height: 59.9375rem;

          .description_slide {
            .slide_box {
              height: 27.5rem;
              .slide_list {
                .slide_item {
                  figure {
                    height: 27.5rem;
                  }
                }
              }
            }
            .alert {
              font-size: 1rem;
              position: absolute;
              bottom: -1.3rem;
              left: 0;
              color: #8a8a8a;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 479px) {
  .detail-container {
    .detail-content {
      .content_description {
        .description {
          .description_text {
            .text_conetnt {
              li {
                p {
                  width: 70%;
                  margin: 0 auto;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>