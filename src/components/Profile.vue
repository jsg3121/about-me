<template>
  <div class="profile-container">
    <div class="main-information">
      <div class="title-content">
        <div div class="title-box">
          <p>I am</p>
          <h1>A FRONT-END</h1>
          <h1>DEVELOPER</h1>
        </div>
      </div>
    </div>
    <div class="profile-imformation">
      <div class="description">
        <p>
          어릴때 부터 호기심이 많은 성격에 만들어 보았던 간단한 계산기 프로그램으로 무언가를 만드는 것의 재미를 느끼게 되었고 그때부터 개발자를
          꿈꾸게 되었습니다. 그래서 대학교도 컴퓨터공학과를 가게 되었고 자연스럽게 많은것을 개발하게 될 수 있었습니다.
          그 중 Javascript가 가지고 있는 가능성과 다양성에 매력을 느끼게 되어 웹 어플리케이션 개발자가 되기 위해 많은 노력을 하고 있습니다.
          저는 제 목표를 '잘하는' 개발자로 삼아서 더 공부하고 있습니다. 경력을 쌓은 개발자는 경력만 쌓이면 자연스럽게 되지만
        </p>
      </div>
      <div class="image">
        <figure class="motto">
          <img src="../assets/image/name-deco@2x.png" alt />
        </figure>
        <figure class="profile-img">
          <img src="../assets/image/image@2x.png" alt />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.profile-container {
  width: 100%;
  height: 75.125rem;

  .main-information {
    width: 100%;
    height: 50rem;
    background: url(../assets/image/main-bg@2x.png) top/cover no-repeat;

    .title-content {
      position: relative;
      width: 100%;
      max-width: 1423px;
      height: 100%;
      margin: 0 auto;

      .title-box {
        width: 41.5rem;
        height: 37.5rem;
        box-shadow: 0px 9px 18px 2px rgba(0, 0, 0, 0.2);
        background-color: #000f2a;
        position: absolute;
        top: 19.375rem;
        left: 0;

        p {
          height: 1.625rem;
          font-family: "Montserrat";
          font-size: 1.875rem;
          font-weight: normal;
          line-height: 0.8;
          color: #d5d5d5;
          margin-top: 11.4375rem;
          margin-bottom: 0.925rem;
          margin-left: 4.0625rem;
        }

        h1 {
          font-family: "Montserrat";
          font-size: 4.75rem;
          font-weight: bold;
          line-height: 1.08;
          letter-spacing: normal;
          text-align: left;
          color: #ffffff;
          margin-left: 4.0625rem;
        }
      }
    }
  }
  .profile-imformation {
    width: 100%;
    max-width: 1280px;
    height: 25.125rem;
    position: relative;
    display: flex;
    margin: 0 auto;

    .description {
      width: 57.375rem;
      position: absolute;
      bottom: 2.25rem;
      left: 0;
      padding-bottom: 1.25rem;

      p {
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.63;
        text-align: left;
        color: #000f2a;
      }
    }

    .image {
      .motto {
        width: 31.875rem;
        height: 7.125rem;
        position: absolute;
        top: 2.875rem;
        right: 4.75rem;
        z-index: 5;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .profile-img {
        width: 16rem;
        height: 16rem;
        position: absolute;
        bottom: 2.25rem;
        right: 0;
        z-index: 3;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    @media screen and (max-width: 1280px) {
      .description {
        left: 1.25rem;
      }
      .image {
        .profile-img {
          right: 1.25rem;
        }
      }
    }
  }
}
</style>