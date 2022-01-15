<template>
  <div class="material-card">
    <div class="material-card__img-holder"></div>
    <div class="material-card__body">
      <div class="material-card__title">
        <h3>{{post.id}}</h3>
        <h3>{{post.title}}</h3>
        <div class="btn-container">
          <card-button class="card-btn">?</card-button>
          <card-button
            class="card-btn"
            @click.native="removePost"
          >Del</card-button>
        </div>

      </div>

      <p>{{post.body}}</p>
    </div>
    <div class="material-card__footer">
      <ul>
        <li class="footer-item">
          some tag
        </li>
        <li class="footer-item">
          some tag
        </li>
        <li class="footer-item">
          some tag
        </li>
      </ul>
    </div>
    <div class="material-card__overlay">
      <div class="overlay__closer">
        <h3>Card title</h3>
        <p>X</p>
      </div>
      <div class="overlay__body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, distinctio suscipit nesciunt illum quod mollitia fugiat, omnis corrupti nostrum ipsa numquam ea error maiores cumque porro est labore rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, distinctio suscipit nesciunt illum quod mollitia fugiat, omnis corrupti nostrum ipsa numquam ea error maiores cumque porro est labore rerum.</p>
      </div>
    </div>
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
  methods: {
    removePost() {
      this.$emit("remove", this.post);
    },
  },
};
</script>

<style scoped>
.material-card {
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 0 5px lightgray;
  height: auto;
  margin: 10px auto;
  max-width: 320px;
  width: 100%;

  transition: 0.3s linear;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 6px;
}

.material-card__img-holder {
  height: 250px;
  background: url("https://cdn.pixabay.com/photo/2020/07/03/16/42/amsterdam-5367020__340.jpg")
    no-repeat;
  background-size: cover;
  background-position: center center;
}

.material-card__body {
  position: relative;
  height: auto;
  padding: 15px;
}

.material-card__body p {
  margin-top: 10px;
  line-height: 1.25;
  text-align: left;
}

.material-card__title {
  position: relative;
  display: flex;
}

.material-card__title h3 {
  font-size: 20px;
  font-weight: bold;
}

.material-card__title h3:after {
  content: "";
  display: block;
  width: auto;
  height: 2px;
  margin-top: 3px;
  background-color: #fd6c01;
}

.btn-container {
  position: absolute;
  right: 3%;
  top: -35px;
  width: 40%;
  display: flex;
  justify-content: space-between;
}

.card-btn {
  border-radius: 30px;
}

.material-card__footer {
  position: relative;
}

.material-card__footer ul {
  display: flex;
  flex-wrap: wrap;
}

.material-card__footer .footer-item {
  margin: 15px;
  color: rgba(175, 172, 172, 0.993);
  list-style-type: none;
  text-align: center;
  cursor: pointer;
}

.material-card__footer .footer-item:after {
  content: "";
  display: block;
  max-width: 0%;
  height: 1.5px;
  margin-top: 2px;
  background-color: gray;
  transition: 0.2s linear;
}

.material-card__footer .footer-item:hover:after {
  max-width: 100%;
}

.material-card__overlay {
  display: block;
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;

  transition: 0.2s linear;
}

.overlay__closer {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.overlay__closer h3 {
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
</style>