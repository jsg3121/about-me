<template>
  <div id="intro">
    <div class="container">
      <div class="info_box">
        <h3>들어가기전에</h3>
        <p>이 페이지는 프로젝트나 스터디를 진행하며 배운 기술을 기록하는곳이며 지속적으로 업데이트 됩니다.</p>
        <p>외부에서 가져온 소스나 정보는 별도의 페이지에 기록했으며 상업적인 정보는 기재하지 않았습니다.</p>
        <p>
          IE는 11버전에서 보일 수 있도록 제작했으며 11이하의 버전에서는 화면이 제대로 표시되지 않습니다.
          <br />크롬 브라우저에서 확인해주시면 감사하겠습니다.
        </p>
        <p>부족한 부분이 많이 있으며 더 나은 방법과 기술로 도움을 주실 수 있으신 분들은 아래 주소로 메일을 보내주시나 git으로 방문해주시면 감사하겠습니다.</p>
        <p>
          Gmail :
          <a href="mailto:xodm95@gmail.com">xodm95@gmail.com</a>
          <br />Github :
          <a
            href="https://github.com/jsg3121/aboutMe"
            target="_blank"
          >https://github.com/jsg3121/aboutMe</a>
        </p>
        <p>제작자의 허락없이 본 사이트의 내용을 다른 사이트에 무단으로 게시하는것을 금합니다.</p>
        <div class="container-btn">
          <button>
            작업물 보러가기
            <figure>
              <img src="../assets/image/arrow@2x.png" alt="go main" />
            </figure>
          </button>
        </div>
      </div>
      <div class="title">
        <figure>
          <img src="../assets/image/title@2x.png" alt="title" draggable="false" />
        </figure>
        <h1>2020</h1>
      </div>
      <div class="name">
        <h4>Jang Sun Gyu</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#intro {
  width: 100vw;
  height: 100vh;
  position: relative;

  .container {
    width: 100%;
    height: 100%;
    background-color: #161921;

    .info_box {
      position: absolute;
      top: 26%;
      right: 0;
      width: 71.25rem;
      height: 55%;
      background-color: #0f48ed;

      h3 {
        color: #efefef;
        margin-top: 8.25rem;
        margin-left: 3.8125rem;
        margin-bottom: 1.8125rem;
        font-size: 2.125rem;
        font-weight: normal;
        text-align: left;
      }

      p {
        color: #efefef;
        margin-left: 3.8125rem;
        font-size: 1rem;
        font-weight: normal;
        text-align: left;
        line-height: 1.5;

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

    .title {
      position: absolute;
      left: 16.6%;
      top: 19.4%;
      width: 44%;

      figure {
        height: 100%;
        img {
          height: 100%;
          width: auto;
          user-select: none;
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
      }
    }
  }

  .name {
    position: absolute;
    left: 16.6%;
    top: 77.4%;
    h4 {
      font-family: "Montserrat";
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.2;
      text-align: left;
      color: #efefef;
      font-style: italic;
    }
  }
}
</style>
