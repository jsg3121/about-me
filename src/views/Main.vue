<template>
  <div>
    <vueHeader></vueHeader>
    <profile></profile>
    <skills></skills>
    <vueFooter></vueFooter>
  </div>
</template>

<script>
import profile from "../components/Profile";
import skills from "../components/Skills";
import vueHeader from "../components/Header";
import vueFooter from "../components/Footer";

export default {
  components: {
    profile,
    skills,
    vueHeader,
    vueFooter,
  },
};
</script>

<style>
</style>