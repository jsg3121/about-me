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
    <div class="profile-information">
      <div class="description">
        <p>주로 즐겨하던 게임들은 대부분 진행 난이도가 높아 입문하기 어려운 게임 종류였습니다.</p>
        <p>룰을 이해하고 노력한 뒤 발전된 플레이를 하여 한 단계씩 성장하는 캐릭터를 보며 성취감과 뿌듯함을 느낄 수 있기 때문입니다.</p>
        <p>개발이란 과정도 목표를 향해 이해하고 시도하며 성장해 완성된 결과물을 보았을 때</p>
        <p>다가오는 성취감과 뿌듯함은 게임을 할 때와 같이 매우 소중합니다.</p>
        <br />
        <p>여러 경험들을 거쳐 이제는 아무것도 없는 공간에, 협업하는 이들의 모든 노력들을 표현할 수 있는 기술을 가졌습니다.</p>
        <p>스스로 더욱 발전하며 즐거운 성취감을 느낄 수 있도록 더욱 높은 곳을 위해 끈임없이 도전하고 노력해 나아가겠습니다.</p>
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
        left: 2rem;

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
  .profile-information {
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
        right: 2rem;
        z-index: 3;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 959px) {
  .profile-container {
    .main-information {
      .title-content {
        .title-box {
          width: 332px;
          height: 300px;
          top: 28rem;
          p {
            margin-top: 87px;
            margin-left: 25px;
          }
          h1 {
            font-size: 3rem;
            margin-left: 25px;
          }

          &:after {
            bottom: 2.375rem;
            right: 3.375rem;
          }
        }
      }
    }

    .profile-information {
      .description {
        left: 1.25rem;
        width: calc(100% - 1.25rem);
      }
      .image {
        .motto {
          top: 3.875rem;
          right: 19.75rem;
        }

        .profile-img {
          right: 2.25rem;
          bottom: 14rem;
        }
      }
    }
  }
}

@media screen and (max-width: 639px) {
  .profile-container {
    height: auto;

    .main-information {
      height: 35rem;

      .title-content {
        .title-box {
          width: 249px;
          height: 225px;
          top: 18rem;
          left: 2rem;
          z-index: 15;

          &:after {
            bottom: 2rem;
            right: 2.675rem;
          }

          p {
            margin-top: 6.4375rem;
            font-size: 1.575rem;
            line-height: 1;
            margin-left: 2.8625rem;
          }

          h1 {
            font-size: 2.55rem;
            margin-left: 2.8625rem;
          }
        }
      }
    }
    .profile-information {
      height: auto;

      .description {
        left: 2rem;
        width: calc(100% - 2.5rem);
        position: relative;
        margin-top: 22rem;
      }

      .image {
        .motto {
          right: 6.5rem;
          top: 11.175rem;
          width: 26.875rem;
          height: auto;
        }

        .profile-img {
          width: 16rem;
          height: 16rem;
          bottom: auto;
          top: 2rem;
          right: 2rem;
        }
      }
    }
  }
}
</style>