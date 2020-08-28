<template>
  <div id="intro">
    <div class="container">
      <div class="info_box"></div>
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
      height: 37.5rem;
      background-color: #0f48ed;
    }
  }
}
</style>