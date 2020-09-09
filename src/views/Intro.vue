<template>
  <div id="intro">
    <div class="container" id="container">
      <div class="title">
        <figure>
          <img id="title-1" src="../assets/image/title@2x.png" alt="title" draggable="false" />
        </figure>
        <h1 id="title-2">2020</h1>
      </div>
      <div class="info_box" id="info_box">
        <h3>들어가기전에</h3>
        <p>
          이 페이지는 프로젝트나 스터디를 진행하며
          <br class="mobile" />배운 기술을 기록하는곳이며 지속적으로 업데이트 됩니다.
        </p>
        <br class="mobile" />
        <p>
          IE는 11버전에서 보일 수 있도록 제작했으며
          <br class="mobile" />11이하의 버전에서는 화면이 제대로 표시되지 않습니다.
          <br />크롬
          브라우저에서 확인해주시면 감사하겠습니다.
        </p>
        <br class="mobile" />
        <p>
          Gmail :
          <a href="mailto:xodm95@gmail.com">xodm95@gmail.com</a>
          <br />Github :
          <a href="https://github.com/jsg3121" target="_blank">https://github.com/jsg3121</a>
        </p>
        <p>
          제작자의 허락없이 본 사이트의 내용을
          <br class="mobile" />다른 사이트에
          무단으로 게시하는것을 금합니다.
        </p>
        <div class="container-btn">
          <button @click="goMain()">
            작업물 보러가기
            <figure>
              <img src="../assets/image/arrow@2x.png" alt="go main" />
            </figure>
          </button>
        </div>
      </div>
      <div class="name">
        <h4 id="name">Jang Sun Gyu</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.intro();
  },
  methods: {
    intro() {
      setTimeout(() => {
        document.getElementById("container").classList.add("main-opening-1");
      }, 200);
      setTimeout(() => {
        document.getElementById("container").classList.add("main-opening-2");
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
      setTimeout(() => {
        document.getElementById("name").classList.add("name-opening");
      }, 3000);
    },
    goMain: () => {},
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
    transition: width 0.7s, height 0.7s;
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
      width: 0;
      height: 34rem;
      transition: width 0.7s;
      overflow: hidden;
      white-space: nowrap;

      // &:after {
      //   content: "";
      //   width: 100%;
      //   height: 100%;
      //   display: block;
      //   position: absolute;
      //   top: 0;
      //   background-color: #161921;
      //   transition: width 0.7s;
      // }

      h3 {
        color: #efefef;
        margin-top: 6.25rem;
        margin-left: 3.8125rem;
        margin-bottom: 1.8125rem;
        font-size: 2.125rem;
        font-weight: normal;
        text-align: left;
        overflow: hidden;
      }

      p {
        color: #efefef;
        margin-left: 3.8125rem;
        font-size: 1rem;
        font-weight: normal;
        text-align: left;
        line-height: 1.5;
        letter-spacing: 0.0625rem;

        a {
          color: #efefef;
          text-decoration: underline;

          &:visited {
            color: #efefef;
          }
        }
      }

      .container-btn {
        width: 15.625rem;
        height: 3.75rem;
        background-color: #ffffff;
        position: absolute;
        left: 3.8125rem;
        bottom: 1.875rem;

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
      background-color: #0f48ed;
      width: 71.25rem;
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
          width: 100%;
          user-select: none;
          transition: transform 0.5s;
          transform: translateY(100%);
        }
      }

      h1 {
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

  .name {
    position: absolute;
    left: 20rem;
    top: 46.875rem;
    overflow: hidden;

    h4 {
      width: 9.375rem;
      font-family: "Montserrat";
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.2;
      text-align: left;
      color: #efefef;
      font-style: italic;
      transition: 0.9s;
      transform: translateY(100%);
    }

    .name-opening {
      transform: translateY(0);
    }
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
        p,
        h3 {
          margin-left: 2.7rem;
        }

        .container-btn {
          left: 2.7rem;
        }
      }

      .name {
        top: 50rem;
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
        width: 55rem;
        p,
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
        top: 18.5rem;
        height: 30rem;
        width: 0;

        h3 {
          margin-top: 2rem;
          margin-left: 1rem;
          font-size: 2rem;
        }

        p {
          margin-left: 1.5rem;
        }

        .container-btn {
          width: 90%;
          height: 3rem;
          left: 50%;
          transform: translateX(-50%);

          button {
            figure {
              width: 2rem;
              height: 2rem;
              margin-left: 1rem;
            }
          }
        }
      }

      .name {
        left: 2.5%;
      }

      .notice-opening-1 {
        width: 100%;
      }
    }
  }
}
</style>
