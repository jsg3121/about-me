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
        <p></p>
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