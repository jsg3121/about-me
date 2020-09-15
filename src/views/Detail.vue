<template>
  <div class="detail-container">
    <vueHeader></vueHeader>
    <div class="detail-content">
      <div class="content_title">
        <button class="prev_card"></button>
        <h1>PROJECT NAME_01</h1>
        <button class="next_card"></button>
      </div>
      <div class="content_description">
        <div class="description">
          <div class="description_slide">
            <button class="prev_card"></button>
            <div class="slide_box">
              <ul class="slide_list">
                <li class="slide_item"></li>
              </ul>
              <ul class="slide_indicate">
                <li></li>
              </ul>
            </div>
            <button class="next_card"></button>
          </div>
          <div class="description_text">
            <div>
              <div class="text_title">
                <figure>
                  <img src="../assets/image/people-icon.png" alt />
                </figure>
                <h3>참여인원</h3>
                <h4>Team Members</h4>
              </div>
              <div class="text_conetnt">
                <p>testtest</p>
                <p>test</p>
                <p>taaaaext</p>
              </div>
            </div>
            <div>
              <div class="text_title">
                <figure>
                  <img src="../assets/image/date-icon.png" alt />
                </figure>
                <h3>참여인원</h3>
                <h4>Team Members</h4>
              </div>
              <div class="text_conetnt">
                <p>testtest</p>
                <p>test</p>
                <p>taaaaext</p>
              </div>
            </div>
            <div>
              <div class="text_title">
                <figure>
                  <img src="../assets/image/skill-icon.png" alt />
                </figure>
                <h3>참여인원</h3>
                <h4>Team Members</h4>
              </div>
              <div class="text_conetnt">
                <p>testtest</p>
                <p>test</p>
                <p>taaaaext</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueHeader from "../components/Header";
export default {
  components: {
    vueHeader,
  },
};
</script>

<style lang="scss">
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
    background-color: rgba(0, 86, 245, 0.3);
  }

  &:active {
    background-color: rgba(175, 175, 175, 0.3);
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
    background-color: rgba(0, 86, 245, 0.3);
  }

  &:active {
    background-color: rgba(175, 175, 175, 0.3);
  }
}
</style>