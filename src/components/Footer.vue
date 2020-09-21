<template>
  <div class="footer-container">
    <div class="content">
      <h1>CONTACT</h1>
      <h3>
        Git
        <a href="https://github.com/jsg3121" target="_blank">https://github.com/jsg3121</a>
      </h3>
      <h3>
        E-mail
        <a href="mailto:xodm95@gmail.com">xodm95@gmail.com</a>
      </h3>
    </div>
    <h2>Jang sun gyu portfolio 2020</h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer-container {
  width: 100%;
  height: 21.4375rem;
  background-color: #1a2840;
  position: absolute;
  z-index: 100;

  .content {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
    padding-top: 3.625rem;
    padding-bottom: 1.4375rem;
    margin-bottom: 2.0625rem;
    border-bottom: solid 1px #808692;

    h1 {
      font-family: "Montserrat";
      font-size: 2.875rem;
      font-weight: 600;
      text-align: center;
      color: #dfe5f1;
      margin-bottom: 2.3125rem;
    }

    h3 {
      font-family: "Montserrat";
      font-weight: normal;
      font-size: 1rem;
      text-align: center;
      color: #a0a9b9;
      margin-bottom: 0.625rem;

      a {
        font-size: 1rem;
        font-weight: normal;
        color: #dfe5f1;
      }
    }
  }

  h2 {
    font-family: "Montserrat";
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    color: #0056f5;
  }
}

@media screen and (max-width: 979px) {
  .footer-container {
    .content {
      width: 80%;
      margin: 0 auto 2.0625rem;
    }
  }
}
</style>