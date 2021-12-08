<template>
  <div class="project-container">
    <vueHeader></vueHeader>
    <div class="project-list">
      <button class="prev_card" @click="prevCard"></button>
      <ul class="card_list">
        <li
          class="list_item"
          :style="{ transform: 'translateX(calc(' + transform + '% + ' + margin + 'rem))'}"
          v-for="item in project"
          :key="item.projectNum"
          @click="detailProject"
        >
          <div
            class="card1"
            :style=" {background: 'url('+ item.thumbnail + ') center/contain no-repeat'}"
          >
            <h1>{{item.projectName}}</h1>
            <h2>{{item.subName}}</h2>
          </div>
        </li>
      </ul>
      <button class="next_card" @click="nextCard"></button>
    </div>
  </div>
</template>

<script>
import vueHeader from '../components/Header'
export default {
  components: {
    vueHeader
  },
  created () {
    this.index = Math.floor(this.$store.state.project.length / 2)
  },
  mounted () {
    const list = document.querySelectorAll('.card_list .list_item')
    list[this.index - 1].childNodes[0].classList.add('before')
    list[this.index].childNodes[0].classList.add('now')
    list[this.index + 1].childNodes[0].classList.add('after')
  },
  data () {
    return {
      index: 0,
      transform: 0,
      margin: 0,
      doubleclick: true,
      project: this.$store.state.project
    }
  },
  methods: {
    prevCard: function () {
      if (this.index > 0 && this.doubleclick) {
        this.doubleclick = false
        const list = document.querySelectorAll('.card_list .list_item')
        this.index--

        this.transform += 100
        this.margin += 2.5

        if (list[this.index - 1] != null) {
          list[this.index - 1].childNodes[0].classList.add('before')
        }

        list[this.index].childNodes[0].classList.remove('before')
        list[this.index].childNodes[0].classList.add('now')

        list[this.index + 1].childNodes[0].classList.remove('now')
        list[this.index + 1].childNodes[0].classList.add('after')

        if (list[this.index + 2] != null) {
          list[this.index + 2].childNodes[0].classList.remove('after')
        }

        setTimeout(() => {
          this.doubleclick = true
        }, 400)
      }
    },

    nextCard: function () {
      if (this.index < this.project.length - 1 && this.doubleclick) {
        this.doubleclick = false

        const list = document.querySelectorAll('.card_list .list_item')
        this.index++

        this.transform -= 100
        this.margin -= 2.5

        if (list[this.index + 1] != null) {
          list[this.index + 1].childNodes[0].classList.add('after')
        }

        list[this.index].childNodes[0].classList.remove('after')
        list[this.index].childNodes[0].classList.add('now')

        list[this.index - 1].childNodes[0].classList.remove('now')
        list[this.index - 1].childNodes[0].classList.add('before')

        if (list[this.index - 2] != null) {
          list[this.index - 2].childNodes[0].classList.remove('before')
        }

        setTimeout(() => {
          this.doubleclick = true
        }, 400)
      }
    },
    detailProject: function (event) {
      const target = event.target
      if (target.getAttribute('class').indexOf('now') !== -1) {
        target.parentNode.classList.add('open')
        this.$store.commit('dataIndex', this.index)
        this.$router.push({
          name: 'Detail'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.project-container {
  width: 100%;
  height: 100vh;
  background-color: #000f2a;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    pointer-events: none;
    box-shadow: inset 0 1.625rem 9.375rem 0.6875rem #000f2a;
    width: 100%;
    height: 100%;
    top: 0;
  }

  .project-list {
    width: 100%;
    position: relative;
    height: 37.5rem;
    margin: 0 auto;
    top: 9.375rem;
    max-width: 1280px;

    .prev_card {
      width: 3.75rem;
      height: 3.75rem;
      position: absolute;
      left: 1.0625rem;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.3) url(../assets/image/left-arrow.png)
        center/contain no-repeat;
      box-shadow: 0px 0.25rem 0.625rem 0 rgba(0, 15, 42, 0.3);
      z-index: 10;
      border: 0;

      &:hover {
        background-color: rgba(0, 86, 245, 0.5);
      }

      &:active {
        background-color: rgba(0, 64, 182, 0.5);
      }
    }

    .next_card {
      width: 3.75rem;
      height: 3.75rem;
      position: absolute;
      right: 1.0625rem;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.3) url(../assets/image/right-arrow.png)
        center/contain no-repeat;
      box-shadow: 0px 0.25rem 0.625rem 0 rgba(0, 15, 42, 0.3);
      z-index: 10;
      border: 0;

      &:hover {
        background-color: rgba(0, 86, 245, 0.5);
      }

      &:active {
        background-color: rgba(0, 64, 182, 0.5);
      }
    }

    ul {
      display: flex;
      align-items: center;
      flex: none;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      .list_item {
        width: 68.75rem;
        height: 37.5rem;
        margin: 0 1.25rem;
        position: relative;
        transition: transform 0.3s;
        cursor: pointer;

        // &.open {
        //   width: 100vw;
        //   height: 100vh;
        //   position: fixed;
        //   left: 50%;
        //   top: 0;
        //   transform: translate(-50%, -9.375rem) !important;
        //   z-index: 1000;
        //   margin: 0;
        //   transition: 0.4s;
        // }

        > div {
          transition: transform 0.3s;
          position: relative;

          h1 {
            font-family: "Montserrat";
            width: 100%;
            height: 5.25rem;
            font-size: 3.125rem;
            font-weight: bold;
            line-height: 1.05;
            text-align: center;
            color: #ffffff;
            position: absolute;
            bottom: -6.4375rem;
            left: 50%;
            transform: translateX(-50%);
            pointer-events: none;
          }

          h2 {
            font-family: "Montserrat";
            font-size: 1.875rem;
            font-weight: 600;
            line-height: 1.06;
            text-align: center;
            color: #0056f5;
            position: absolute;
            bottom: -6.9375rem;
            left: 50%;
            transform: translateX(-50%);
            pointer-events: none;
          }
        }

        > div.before {
          transform: perspective(81.25rem) rotateY(35deg) translateX(25.125rem);

          &:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.4);
          }

          h1 {
            color: #676767;
          }

          h2 {
            color: #00318c;
          }
        }

        > div.after {
          z-index: 10;
          transform: perspective(81.25rem) rotateY(-35deg)
            translateX(-25.125rem);

          &:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.4);
          }

          h1 {
            color: #676767;
          }

          h2 {
            color: #00318c;
          }
        }
        .card1 {
          width: 100%;
          height: 100%;
          background-color: beige;
        }

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 639px) {
  .project-container {
    .project-list {
      height: 26rem;

      ul {
        .list_item {
          height: 26rem;

          > div {
            h1 {
              font-size: 2rem;
            }

            &.before,
            &.after {
              transform: none;
            }
          }

          .card1 {
            width: 90vw;
            margin: 0 auto;
          }
        }
      }

      .next_card:hover,
      .prev_card:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style>
