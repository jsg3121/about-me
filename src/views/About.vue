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
            <div class="profile_img"></div>
            <div class="text_box">
              <p>
                협업에 대한 마인드가 열려있는 직원.
                개발적인 내용을 잘 몰라 얼렁뚱땅 설명하여도 불평없이 잘 수용
                하여 개발에 반영해 주었던 팀원 입니다.
                반영이 어려운 부분은 충분한 설명을 통해 디자이너를 이해시키
                며, 다른 방법으로 진행할 수 있는 방향성을 제시해주기도 합니다.
              </p>
              <h5>금뫄뫄 / 디자이너 / 팀 프로젝트 팀원</h5>
            </div>
          </div>
          <div class="content_box">
            <div class="profile_img"></div>
            <div class="text_box">
              <p>
                협업에 대한 마인드가 열려있는 직원.
                개발적인 내용을 잘 몰라 얼렁뚱땅 설명하여도 불평없이 잘 수용
                하여 개발에 반영해 주었던 팀원 입니다.
                반영이 어려운 부분은 충분한 설명을 통해 디자이너를 이해시키
                며, 다른 방법으로 진행할 수 있는 방향성을 제시해주기도 합니다.
              </p>
              <h5>금뫄뫄 / 디자이너 / 팀 프로젝트 팀원</h5>
            </div>
          </div>
          <div class="content_box">
            <div class="profile_img"></div>
            <div class="text_box">
              <p>
                협업에 대한 마인드가 열려있는 직원.
                개발적인 내용을 잘 몰라 얼렁뚱땅 설명하여도 불평없이 잘 수용
                하여 개발에 반영해 주었던 팀원 입니다.
                반영이 어려운 부분은 충분한 설명을 통해 디자이너를 이해시키
                며, 다른 방법으로 진행할 수 있는 방향성을 제시해주기도 합니다.
              </p>
              <h5>금뫄뫄 / 디자이너 / 팀 프로젝트 팀원</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
export default {
  components: {
    vueHeader,
  },
  data() {
    return {
      scroll: false,
      typing: "",
    };
  },
  mounted() {
    this.typoWrite();
  },
  methods: {
    typoWrite: function () {
      this.typing = "";
      const txtKo = "우린 답을 찾을 것이다. 늘 그랬듯이.";

      let arr = txtKo.split("");
      setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
          setTimeout(() => {
            this.typing += arr[i];
          }, i * 100);
        }
      }, 700);

      setTimeout(() => {
        // setInterval(() => {
        // }, 700);
        let title = document.querySelector(
          ".about-container .inner-container .title h1"
        );
        title.classList.remove("cursor");
      }, 2300);
    },
  },
};
</script>

<style lang="scss">
.about-container {
  .header_container {
    &:hover {
      background-color: rgba(0, 0, 0, 0) !important;
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
      background-color: #ccced1;

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
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin-top: 3.125rem;

          .tag_item {
            width: 19.0625rem;
            height: 4.375rem;
            border-radius: 2.1875rem;
            background-color: #ffffff;
            margin-left: 1.25rem;
            margin-bottom: 1.25rem;
            position: relative;

            &:first-child {
              margin-left: 0;
            }

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
              width: 15.3125rem;
              height: 3.125rem;
              text-align: center;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);

              p,
              a {
                font-size: 1.125rem;
                font-weight: normal;
                text-align: center;
                line-height: 1.5;
                color: #000f2a;
              }

              // a {
              //   text-decoration: underline;
              //   text-underline-position: under;
              // }
            }
          }
        }
      }
    }

    .from_friends {
      min-height: 72.5rem;
      width: 100%;
      background-color: #eceef0;
      position: relative;
      padding-top: 6.25rem;

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
          box-shadow: 0 0 1.35rem 0.15rem rgba(0, 15, 42, 0.14);
          background-color: #ffffff;
          margin-bottom: 5.5625rem;
          position: relative;

          .profile_img {
            width: 8.125rem;
            height: 8.125rem;
            border-radius: 50%;
            box-shadow: 0 0 1.35rem 0.15rem rgba(0, 86, 245, 0.14);
            background-color: #ffffff;
            position: absolute;
            top: -4.0625rem;
            right: 1.875rem;
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
</style>