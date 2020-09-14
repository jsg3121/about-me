<template>
  <div class="profile-container">
    <div class="main-information">
      <div class="title-content">
        <div class="title-box">
          <p>I am</p>
          <h1>A FRONT-END</h1>
          <h1>DEVELOPER</h1>
        </div>
      </div>
    </div>
    <div class="profile-imformation">
      <div class="description">
        <p>어린시절부터 가장 좋아하는 게임 장르를 정해보라고 했을때 항상 난이도가 높고 입문하기 어려운 게임을 좋아했습니다.</p>
        <p>제가 개발을 하는 이유도 좋아하는 게임을 하는 이유와 같습니다.</p>
        <p>게임을 할 때 처럼 개발도 하나의 단계를 넘어가기 위해 노력하고 발전시키는 시간들이 너무 좋았고 그러한 노력으로 이겨냈을 때 얻는 성취감과 뿌듯함이 매우 소중했기 때문입니다.</p>
        <p>게임에 시간을 투자하여 많은 기술과 스킬을 가진사람을 고인물이라고도 부릅니다.</p>
        <p>아무것도 없는 화면에 간단한 이미지를 표시하는것 부터 복잡한 기능을 만들고 원하는 정보를 표시하기까지 등 많은 기술을 가졌으며</p>
        <p>알고 있는 지식에만 머물러 있지 않고 항상 새로운 정보를 알기 위해 노력하는 고인물개발자가 되고 싶습니다.</p>
      </div>
      <div class="image">
        <figure class="motto">
          <img src="../assets/image/name-deco.png" alt />
        </figure>
        <figure class="profile-img">
          <img src="../assets/image/image.png" alt />
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
    background: url(../assets/image/main-bg.png) top/cover no-repeat;

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

        &:after {
          content: "";
          background: url(../assets/image/scroll.png) center/contain no-repeat;
          display: block;
          width: 1.875rem;
          height: 3.875rem;
          position: absolute;
          bottom: 4.375rem;
          right: 4.375rem;
        }

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
      width: 57.975rem;
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