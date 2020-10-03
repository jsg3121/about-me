<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import "./style/font.css";
import "./style/reset.css";
import "./style/common.css";
// 사이트 속도 체크 관련 코드
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
// 사이트 속도 체크 관련 코드

export default {
  created() {
    let agent = navigator.userAgent.toLowerCase();
    if (
      (navigator.appName == "Netscape" && agent.indexOf("trident") != -1) ||
      agent.indexOf("msie") != -1
    ) {
      alert("edge 또는 chrome에서 확인해주시기 부탁드립니다.");
      top.window.opener = top;
      top.window.open("", "_parent", "");
      top.window.close();
    } else {
    }
  },
};
</script>
<style lang="scss">
#app {
  overflow: hidden;
}
</style>
