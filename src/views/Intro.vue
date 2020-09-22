<template>
  <div id="intro">
    <div class="container" id="container">
      <div class="title">
        <figure>
          <img id="title-1" src="../assets/image/title.png" alt="title" draggable="false" />
        </figure>
        <h1 id="title-2">2020</h1>
      </div>
      <div class="info_box" id="info_box">
        <h3>찾아주셔서 감사합니다.</h3>
        <p>이 사이트는 Vue.js 를 이용하여 제작하였습니다.</p>
        <br />
        <p>이 사이트는 프로젝트가 추가될 때 마다 업데이트 될 예정입니다.</p>
        <br />
        <p>
          <span>IE(Internet Explorer) 11버전 미만의 브라우저</span>에서는
          <br class="mobile mobile-sm" />화면이 제대로 표시되지 않을 수 있습니다.
          <br />
        </p>
        <br />
        <p>
          <span>크롬(Chrome)</span>브라우저에서 가장 정확한 내용의 컨텐츠를
          <br class="mobile-sm" />확인하실 수 있습니다.
        </p>
        <br />
        <p class="alert">© 2020 COPIRIGHT. ALL RIGHTS RESERVED</p>
        <div class="container-btn">
          <button @click="goMain()">
            들어가기
            <figure>
              <img src="../assets/image/arrow.png" alt="go main" />
            </figure>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.intro();
  },
  data() {
    return {};
  },
  methods: {
    intro() {
      setTimeout(() => {
        document.getElementById("container").classList.add("main-opening-1");
      }, 200);
      setTimeout(() => {
        document.getElementById("container").classList.add("main-opening-2");
        document.getElementById("title-1").style.display = "block";
        document.getElementById("title-2").style.display = "block";
      }, 950);
      setTimeout(() => {
        document.getElementById("title-1").classList.add("title-opening-1");
      }, 1850);
      setTimeout(() => {
        document.getElementById("title-2").classList.add("title-opening-2");
      }, 1950);
      setTimeout(() => {
        document.getElementById("info_box").classList.add("notice-opening-1");
      }, 2000);
    },
    goMain: function () {
      setTimeout(() => {
        document.getElementById("container").classList.remove("main-opening-1");
      }, 2350);
      setTimeout(() => {
        document.getElementById("container").classList.remove("main-opening-2");
        document.getElementById("title-1").style.display = "none";
        document.getElementById("title-2").style.display = "none";
      }, 1850);
      setTimeout(() => {
        document.getElementById("title-1").classList.remove("title-opening-1");
      }, 1250);
      setTimeout(() => {
        document.getElementById("title-2").classList.remove("title-opening-2");
      }, 950);
      setTimeout(() => {
        document
          .getElementById("info_box")
          .classList.remove("notice-opening-1");
      }, 200);

      setTimeout(() => {
        this.$router.push({
          name: "Main",
        });
      }, 2950);
    },
  },
};
</script>

<style lang="scss">
#intro {
  width: 100vw;
  height: 100vh;
  position: relative;

  .container {
    width: 1px;
    height: 0;
    background-color: #161921;
    transition: width 0.5s, height 0.5s;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;

    .info_box {
      position: absolute;
      top: 14.375rem;
      z-index: 1;
      right: 0;
      width: 71.25rem;
      transform: translateX(100%);
      height: 34rem;
      transition: transform 0.7s;
      overflow: hidden;
      white-space: nowrap;
      background-color: #0f48ed;

      h3 {
        color: #efefef;
        margin-top: 7.5rem;
        margin-left: 3.8125rem;
        margin-bottom: 3.5875rem;
        font-size: 2.125rem;
        font-weight: normal;
        text-align: left;
        overflow: hidden;
      }

      p {
        color: #efefef;
        margin-left: 5rem;
        font-size: 1rem;
        font-weight: normal;
        text-align: left;
        line-height: 1.5;
        letter-spacing: 0.0625rem;
        position: relative;

        span {
          text-decoration: underline;
          text-underline-position: under;
        }

        &.alert {
          position: absolute;
          right: 0.75rem;
          bottom: 0.875rem;
          margin-left: 1.05rem;
          margin-top: 0;
          font-size: 0.75rem;
          &:after {
            display: none;
          }
        }

        &:after {
          content: "";
          display: inline-block;
          width: 0.3rem;
          height: 0.3rem;
          background-color: #ffffff;
          position: absolute;
          top: 0.6rem;
          left: -0.8125rem;
          border-radius: 0.15rem;
        }
      }

      .container-btn {
        width: 15.625rem;
        height: 3.75rem;
        background-color: #ffffff;
        position: absolute;
        left: 3.8125rem;
        bottom: 3rem;

        button {
          border: 0;
          background-color: transparent;
          height: 100%;
          width: 100%;
          font-size: 1rem;
          color: #0f48ed;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;

          figure {
            width: 3.125rem;
            height: 3.125rem;
            margin-left: 1.5625rem;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .notice-opening-1 {
      transform: translateX(0);
    }

    .title {
      position: absolute;
      left: 20rem;
      top: 10rem;
      z-index: 5;
      width: 100%;
      overflow: hidden;

      figure {
        width: 52.75rem;
        height: 8.5rem;
        overflow: hidden;

        img {
          display: none;
          width: 100%;
          user-select: none;
          transition: transform 0.5s;
          transform: translateY(100%);
        }
      }

      h1 {
        display: none;
        font-size: 5rem;
        font-weight: 500;
        text-align: left;
        color: #efefef;
        font-family: "Montserrat";
        margin-top: 0.875rem;
        user-select: none;
        width: auto;
        transform: translateY(100%);
        transition: transform 0.5s;
      }

      .title-opening-1 {
        transform: translateY(0);
      }

      .title-opening-2 {
        transform: translateY(0);
      }
    }
  }

  .main-opening-1 {
    height: 100%;
  }

  .main-opening-2 {
    width: 100%;
  }
}

@media screen and (max-width: 1720px) {
  #intro {
    .container {
      .title,
      .name {
        left: 15rem;
      }

      .title {
        top: 13.125rem;
      }

      .info_box {
        top: 17.5rem;
        p {
          margin-left: 3.7rem;
        }
        h3 {
          margin-left: 2.7rem;
        }

        .container-btn {
          left: 2.7rem;
        }
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  #intro {
    .container {
      .title,
      .name {
        left: 10rem;
      }

      .info_box {
        top: 17.5rem;
        p {
          margin-left: 3.7rem;
        }
        h3 {
          margin-left: 2.7rem;
        }

        .container-btn {
          left: 2.7rem;
        }
      }

      .notice-opening-1 {
        width: 53.35rem;
      }
    }
  }
}

@media screen and (max-width: 980px) {
  #intro {
    .container {
      .title {
        left: 0;
      }

      .title {
        top: 4rem;
        position: relative;

        figure {
          width: 95%;
          height: auto;
          margin: 0 auto;
        }

        h1 {
          margin-top: 0;
          margin-left: 2.5%;
          font-size: 3rem;
        }
      }

      .info_box {
        top: 20rem;
        height: 30rem;
        width: 100%;

        h3 {
          margin-top: 2rem;
          margin-left: 1rem;
          font-size: 2rem;
        }

        p {
          margin-left: 2rem;
        }

        .container-btn {
          width: 90%;
          height: 4.8rem;
          left: 50%;
          transform: translateX(-50%);
          bottom: 4rem;

          button {
            font-size: 1.5rem;

            figure {
              width: 3rem;
              height: 3rem;
              margin-left: 1rem;
            }
          }
        }
      }
      .notice-opening-1 {
        transform: translateX(0);
      }
    }
  }
}
</style>
