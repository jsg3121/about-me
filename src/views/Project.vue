<template>
  <div class="project-container">
    <div class="project-list">
      <button class="prev_card" @click="prevCard"></button>
      <ul class="card_list">
        <li class="list_item" :style="{ transform: 'translateX(' + transform + '%)' }">
          <div class="card1"></div>
        </li>
        <li class="list_item" :style="{ transform: 'translateX(' + transform + '%)' }">
          <div class="card2 before"></div>
        </li>
        <li class="list_item" :style="{ transform: 'translateX(' + transform + '%)' }">
          <div class="card3 now"></div>
        </li>
        <li class="list_item" :style="{ transform: 'translateX(' + transform + '%)' }">
          <div class="card4 after"></div>
        </li>
        <li class="list_item" :style="{ transform: 'translateX(' + transform + '%)' }">
          <div class="card5"></div>
        </li>
      </ul>
      <button class="next_card" @click="nextCard"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 3,
      transform: 0,
      doubleclick: true,
    };
  },
  methods: {
    prevCard: function () {
      if (this.index > 1 && this.doubleclick) {
        this.doubleclick = false;
        let list = document.querySelectorAll(".card_list .list_item");
        this.index--;
        if (list[this.index - 2] != null) {
          list[this.index - 2].childNodes[0].classList.add("before");
        }

        list[this.index - 1].childNodes[0].classList.remove("before");
        list[this.index - 1].childNodes[0].classList.add("now");

        list[this.index].childNodes[0].classList.add("after");

        this.transform += 100;
        setTimeout(() => {
          this.doubleclick = true;
        }, 700);
      }
    },

    nextCard: function () {
      if (this.index < 5 && this.doubleclick) {
        this.doubleclick = false;
        let list = document.querySelectorAll(".card_list .list_item");
        if (list[this.index - 2] != null) {
          list[this.index - 2].childNodes[0].classList.remove("before");
        }

        list[this.index - 1].childNodes[0].classList.remove("now");
        list[this.index - 1].childNodes[0].classList.add("before");

        list[this.index].childNodes[0].classList.remove("after");
        list[this.index].childNodes[0].classList.add("now");

        if (list[this.index + 1] != null) {
          list[this.index + 1].childNodes[0].classList.add("after");
        }

        this.index++;
        this.transform -= 100;
        setTimeout(() => {
          this.doubleclick = true;
        }, 700);
      }
    },
  },
};
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
    box-shadow: inset 0 0 14.375rem 3.0875rem #000f2a;
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
      background-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0px 0.25rem 0.625rem 0 rgba(0, 15, 42, 0.3);
      z-index: 10;
      border: 0;

      &:hover {
        background-color: rgba(0, 86, 245, 0.3);
      }
    }

    .next_card {
      width: 3.75rem;
      height: 3.75rem;
      position: absolute;
      right: 1.0625rem;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0px 0.25rem 0.625rem 0 rgba(0, 15, 42, 0.3);
      z-index: 10;
      border: 0;

      &:hover {
        background-color: rgba(0, 86, 245, 0.3);
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
        position: relative;
        transition: transform 0.6s;

        > div {
          transition: transform 0.6s;
        }

        > div.before {
          transform: perspective(81.25rem) rotateY(35deg) translateX(25.125rem);
        }

        > div.after {
          transform: perspective(81.25rem) rotateY(-35deg)
            translateX(-25.125rem);
        }

        .card1 {
          width: 100%;
          height: 100%;
          background-color: red;
        }
        .card2 {
          width: 100%;
          height: 100%;
          background-color: blue;
        }
        .card3 {
          width: 100%;
          height: 100%;
          background-color: yellow;
        }
        .card4 {
          width: 100%;
          height: 100%;
          background-color: brown;
        }
        .card5 {
          width: 100%;
          height: 100%;
          background-color: green;
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
</style>