<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import "./style/font.css";
import "./style/reset.css";
import "./style/common.css";
(function (j, en, ni, fer) {
  j["dmndata"] = [];
  j["jenniferFront"] = function (args) {
    window.dmndata.push(args);
  };
  j["dmnaid"] = fer;
  j["dmnatime"] = new Date();
  j["dmnanocookie"] = false;
  j["dmnajennifer"] = "JENNIFER_FRONT@INTG";
  var b = Math.floor(new Date().getTime() / 60000) * 60000;
  var a = en.createElement(ni);
  a.src = "https://d-collect.jennifersoft.com/" + fer + "/demian.js?" + b;
  a.async = true;
  en.getElementsByTagName(ni)[0].parentNode.appendChild(a);
})(window, document, "script", "64cc2450");

console.log("ASDF");
export default {
  created() {},
};
</script>
<style lang="scss">
</style>
