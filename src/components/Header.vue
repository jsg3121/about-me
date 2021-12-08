<template>
  <div class="header_container">
    <nav class="header_nav" @scroll="scrollHeader()">
      <router-link :to="{name: 'Main'}" class="link">MAIN</router-link>
      <router-link :to="{name: 'Project'}" class="link">PROJECT</router-link>
      <router-link :to="{name: 'About'}" class="link">ABOUT ME</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  created () {
    window.addEventListener('scroll', this.scrollHeader)
  },
  methods: {
    scrollHeader: function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop > 0) {
        const headerBg = document.querySelector('.header_container')
        const headerTxt = document.querySelectorAll(
          '.header_container .header_nav .link'
        )

        headerBg.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'

        headerTxt.forEach((txt) => {
          txt.style.color = '#ffffff'
        })
      } else if (scrollTop === 0) {
        const headerBg = document.querySelector('.header_container')
        const headerTxt = document.querySelectorAll(
          '.header_container .header_nav .link'
        )

        headerTxt.forEach((txt) => {
          txt.style.color = ''
        })
        headerBg.style.backgroundColor = 'transparent'
      }
    }
  }
}
</script>

<style lang="scss">
.header_container {
  height: 5rem;
  width: 100%;
  position: fixed;
  background-color: transparent;
  z-index: 50;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  .header_nav {
    height: 100%;
    width: 100%;
    .link {
      position: relative;
      left: 17.7%;
      margin-right: 4.89%;
      top: 1.8125rem;
      font-family: "Montserrat";
      font-size: 1.375rem;
      font-weight: normal;
      text-align: center;
      color: #ffffff;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
@media screen and (max-width: 960px) {
  .header_container {
    .header_nav {
      .link {
        left: 2rem;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
