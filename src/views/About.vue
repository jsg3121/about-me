<template>
  <div class="about-container">
    <vueHeader></vueHeader>
    <div class="inner-container">
      <div class="title">
        <h1 class="cursor">{{typing}}</h1>
        <figure>
          <img src="../assets/image/scroll.png" alt />
        </figure>
      </div>
      <div class="tag_me">
        <div class="tag_content">
          <h2># 자기소개</h2>
          <div class="item_box">
            <div class="tag_item">
              <div class="text_box">
                <p># 생년월일</p>
                <p>1995년 08월 09일</p>
              </div>
            </div>
            <div class="tag_item">
              <div class="text_box">
                <p># 학력</p>
                <p>두원공대 스마트소프트웨어과</p>
              </div>
            </div>
            <div class="tag_item">
              <div class="text_box">
                <p># 병역구분</p>
                <p>병장 만기전역(의무경찰)</p>
              </div>
            </div>
            <div class="tag_item important">
              <div class="text_box">
                <p># 자격증</p>
                <p>정보처리산업기사</p>
              </div>
            </div>
            <div class="tag_item important">
              <div class="text_box">
                <p># Email</p>
                <a href="mailTo:xodm95@gamil.com" target="_blank">xodm95@gamil.com</a>
              </div>
            </div>
            <div class="tag_item important">
              <div class="text_box">
                <p># github</p>
                <a href="https://github.com/jsg3121" target="_blank">https://github.com/jsg3121</a>
              </div>
            </div>
            <div class="tag_item important">
              <div class="text_box">
                <p># velog</p>
                <a href="https://velog.io/@jsg3121" target="_blank">https://velog.io/@jsg3121</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="from_friends">
        <h2>장선규는 이런사람 입니다!</h2>
        <div class="friends_content">
          <div class="content_box">
            <figure class="profile_img">
              <img src="../assets/image/about_img_sample.png" alt />
            </figure>
            <div class="text_box">
              <p>
                자신의 맡은 일을 충실히 수행하는 친구입니다.
                프로젝트 진행 시 자신의 맡은 역할을 일정에 차질없이 진행하고
                팀원들과의 관계도 조율하며 좋은 결과를 내기 위해 노력합니다.
              </p>
              <h5>이건우 사원 / 개발자 / DK BMC</h5>
            </div>
          </div>
          <div class="content_box">
            <figure class="profile_img">
              <img src="../assets/image/about_img_sample.png" alt />
            </figure>
            <div class="text_box">
              <p>
                장선규 팀원은 자기가 맡은 일에 적극적이면서 책임감을 느끼며
                프로젝트 팀원 간의 커뮤니케이션이 좋아 팀원들에 의사소통을 책임짐,
                화면 설계에 대한 이해도가 높고 항상 새로운 기술들을 습득하려고 하여 프로젝트에서 좋은 결과 냄
              </p>
              <h5>류성필 주임 / 개발자 / 솔루비스</h5>
            </div>
          </div>
          <div class="content_box">
            <figure class="profile_img">
              <img src="../assets/image/about_img_1.png" alt />
            </figure>
            <div class="text_box">
              <p>
                협업에 대한 마인드가 열려있는 직원.
                개발적인 내용을 잘 몰라 얼렁뚱땅 설명하여도 불평없이 잘 수용
                하여 개발에 반영해 주었던 팀원 입니다.
                반영이 어려운 부분은 충분한 설명을 통해 디자이너를 이해시키며,
                다른 방법으로 진행할 수 있는 방향성을 제시해주기도 합니다.
              </p>
              <h5>금혜주 전임 / 디자이너 / (주)크리섹터</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import vueHeader from '../components/Header'
import vueFooter from '../components/Footer'
export default {
  components: {
    vueHeader,
    vueFooter
  },
  data () {
    return {
      scroll: false,
      typing: ''
    }
  },
  mounted () {
    this.typoWrite()
  },
  methods: {
    typoWrite: function () {
      this.typing = ''
      const txtKo = '우린 답을 찾을 것이다. 늘 그랬듯이.'

      const arr = txtKo.split('')
      setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
          setTimeout(() => {
            this.typing += arr[i]
          }, i * 100)
        }
      }, 700)

      setTimeout(() => {
        // setInterval(() => {
        // }, 700);
        const title = document.querySelector(
          '.about-container .inner-container .title h1'
        )
        title.classList.remove('cursor')
      }, 2300)
    }
  }
}
</script>

<style lang="scss">
.about-container {
  .header_container {
    &:hover {
      .header_nav {
        .link {
          color: #ffffff;
        }
      }
    }

    .header_nav {
      .link {
        color: #333333;
      }
    }
  }
  .inner-container {
    width: 100%;

    .title {
      height: 51.75rem;
      background-color: #ffffff;
      position: relative;

      h1 {
        font-size: 3.75rem;
        font-weight: normal;
        text-align: center;
        color: #333333;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;

        &.cursor {
          border-right: 2px solid #333333;
        }
      }

      figure {
        width: 1.875rem;
        height: 3.875rem;
        margin: 3.0625rem auto 0;
        position: absolute;
        left: 50%;
        top: calc(50% + 3.0625rem);
        transform: translate(-50%, -50%);

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .tag_me {
      width: 100%;
      min-height: 27.625rem;
      padding-bottom: 1.25rem;
      background-color: #eceef0;

      .tag_content {
        max-width: 1280px;
        margin: 0 auto;
        position: relative;
        padding-top: 6.25rem;

        h2 {
          font-size: 2.25rem;
          font-weight: normal;
          text-align: center;
          color: #333333;
          font-weight: bold;
        }

        .item_box {
          width: 90%;
          max-width: 1080px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin: 3.125rem auto 0;

          .tag_item {
            width: auto;
            height: auto;
            border-radius: 2.1875rem;
            background-color: #ffffff;
            margin: 1.25rem 0.5rem;
            position: relative;
            padding: 0.5rem 2rem;

            &.important {
              background-color: #000f2a;

              .text_box {
                p,
                a {
                  color: #ffffff;
                }
              }
            }

            .text_box {
              text-align: center;

              p,
              a {
                font-size: 1.125rem;
                font-weight: normal;
                text-align: center;
                line-height: 1.5;
                color: #000f2a;
              }
            }
          }
        }
      }
    }

    .from_friends {
      min-height: 72.5rem;
      width: 100%;
      position: relative;
      padding-top: 6.25rem;
      margin-bottom: 10rem;

      h2 {
        font-size: 2.25rem;
        font-weight: normal;
        text-align: center;
        color: #333333;
        margin-bottom: 5.5rem;
        font-weight: bold;
      }

      .friends_content {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap-reverse;
        align-items: center;
        justify-content: space-around;

        .content_box {
          width: 38.75rem;
          height: 21.25rem;
          border-radius: 1.25rem;
          box-shadow: 0 0 1.35rem 0.15rem rgba(0, 86, 245, 0.14);
          background-color: #ffffff;
          margin-bottom: 5.5625rem;
          position: relative;

          .profile_img {
            width: 8.125rem;
            height: 8.125rem;
            border-radius: 50%;
            box-shadow: 0 0 1.35rem 0.15rem rgba(0, 15, 42, 0.14);
            background-color: #ffffff;
            position: absolute;
            top: -4.0625rem;
            right: 1.875rem;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .text_box {
            position: relative;
            width: 100%;
            height: 100%;

            p {
              width: calc(100% - 5.375rem);
              position: absolute;
              top: 5.375rem;
              left: 50%;
              transform: translateX(-50%);
              font-size: 1.3125rem;
              font-weight: normal;
              line-height: 1.5;
              text-align: left;
              color: #333333;
            }

            h5 {
              width: calc(100% - 5.375rem);
              position: absolute;
              bottom: 2.125rem;
              left: 50%;
              transform: translateX(-50%);
              font-size: 1.375rem;
              font-weight: normal;
              text-align: right;
              color: #333333;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 959px) {
  .about-container {
    .inner-container {
      .from_friends {
        .friends_content {
          .content_box {
            margin: 4rem 2rem;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 639px) {
  .about-container {
    .inner-container {
      .title {
        h1 {
          line-height: 1.4;
          width: 360px;
        }

        figure {
          top: calc(50% + 5.0625rem);
        }
      }

      .tag_me {
        .tag_content {
          .item_box {
            .tag_item {
              width: auto;
              height: auto;
              padding: 0.3rem 1.1rem;
              margin: 0.55rem 0.5rem;

              .text_box {
                p:first-child {
                  display: none;
                }

                p,
                a {
                  &:before {
                    content: "#";
                    font-size: 1.125rem;
                    font-weight: normal;
                    text-align: center;
                    line-height: 1.5;
                    margin-right: 0.3rem;
                  }
                }
              }
            }
          }
        }
      }

      .from_friends {
        padding-top: 9.45rem;
        h2 {
          margin-bottom: 3rem;
        }

        .friends_content {
          .content_box {
            margin: 3.2rem 2rem;
          }
        }
      }
    }
  }
}
</style>
