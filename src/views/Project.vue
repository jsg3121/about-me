<template>
  <div class="project-container">
    <div class="project-list">
      <button class="prev_card"></button>
      <ul>
        <li>
          <div class="card1"></div>
        </li>
        <li>
          <div class="card2 before"></div>
        </li>
        <li>
          <div class="card3 now"></div>
        </li>
        <li>
          <div class="card4 after"></div>
        </li>
        <li>
          <div class="card5"></div>
        </li>
      </ul>
      <button class="next_card"></button>
    </div>
  </div>
</template>

<script>
export default {};
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
    box-shadow: inset 0 0 14.375rem 6.1875rem #000f2a;
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

      li {
        width: 68.75rem;
        height: 37.5rem;
        margin: 0 1.25rem;
        position: relative;

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