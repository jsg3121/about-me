<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import "./style/font.css";
import "./style/reset.css";
import "./style/common.css";

export default {};
</script>
<style lang="scss">
</style>
