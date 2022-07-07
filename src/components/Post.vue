<template>
  <div class="post-card">
    <img
      :src="require(`@/assets/${post.img ? post.img : 'logo.png'}`)"
      alt="фото игры"
      class="post-card__img"
    >
    <div class="post-card__body">
      <div class="post-card__title">
        <h3>{{post.title}}</h3>
        <div class="post-card__btn-container">
          <card-button
            @click.native="bodyIsVisible = true"
            class="post-card__btn"
          >?</card-button>
          <card-button
            class="post-card__btn"
            @click.native="$emit('remove', post)"
          >
            <font-awesome-icon icon="fa-solid fa-trash" />
          </card-button>
        </div>

      </div>

      <p>{{post.body}}</p>
    </div>
    <div class="post-card__footer">
      <ul class="footer__list">
        <li
          class="footer__item"
          v-for="tag in post.tags"
          :key="tag"
        >
          {{tag}}
        </li>
      </ul>
      <span class="footer__date">{{post.date}}</span>
    </div>
    <transition name="overlay">
      <div
        v-show="bodyIsVisible"
        class="post-card__overlay"
      >
        <div class="overlay__closer">
          <h3>{{post.title}}</h3>
          <card-button
            @click.native="bodyIsVisible = false"
            class="post-btn"
          >X</card-button>
        </div>
        <div class="overlay__body">
          <p>{{post.body}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return { bodyIsVisible: false };
  },
};
</script>

<style scoped>
.post-card {
  position: relative;
  height: auto;
  margin: 10px auto;
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 0 5px lightgray;
  transition: 0.3s linear;
}

.post-card__img {
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.post-card__body {
  position: relative;
  height: auto;
  padding: 25px 15px;
}

.post-card__body p {
  margin-top: 10px;
  line-height: 1.25;
  text-align: left;
  height: 60px;
  overflow: hidden;
}

.post-card__title {
  position: relative;
  display: flex;
}

.post-card__title h3 {
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.post-card__title h3:after {
  content: "";
  display: block;
  width: auto;
  height: 2px;
  margin-top: 3px;
  background-color: #fd6c01;
}

.post-card__btn-container {
  position: absolute;
  right: 3%;
  top: -50px;
  width: 40%;
  display: flex;
  justify-content: space-between;
}

.post-card__btn {
  border-radius: 30px;
}

.post-card__footer {
  position: relative;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
}

.footer__list {
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
}

.footer__item {
  margin-right: 15px;
  color: rgba(175, 172, 172, 0.993);
  text-align: center;
  cursor: pointer;
}

.footer__item:after {
  content: "";
  display: block;
  max-width: 0%;
  height: 1.5px;
  margin-top: 2px;
  background-color: gray;
  transition: 0.2s linear;
}

.footer__item:hover:after {
  max-width: 100%;
}

.footer__date {
  color: rgba(175, 172, 172, 0.993);
  text-align: right;
}

.post-card__overlay {
  display: block;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fac9a6;
}

.overlay__closer {
  padding: 15px;
}

.overlay__closer h3 {
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
}

.overlay__closer p {
  display: inline-block;
  margin-left: auto;
  font-size: 25px;
  background-color: #fd6c01;
  color: #fff;
  padding: 5px 10px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 3px 7px lightgray;
  transition: 0.2s linear;
}

.overlay__closer p:hover {
  box-shadow: 0 0px 0px lightgray;
}

.overlay__body {
  overflow-y: auto;
  padding: 15px;
  line-height: 1.25;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: all 0.4s;
}

.overlay-enter,
.overlay-leave-to {
  transform: translateY(100%);
}
</style>