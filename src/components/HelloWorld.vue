<template>
  <div class="hello">
    <form class="create-post-form">
      <input
        :value="title"
        @input="title = $event.target.value"
        type="text"
        placeholder="Введите заголовок поста"
      >
      <input
        :value="body"
        @input="body = $event.target.value"
        type="text"
        placeholder="Введите текст поста"
      >
      <button @click="createPost">Создать</button>
    </form>
    <div
      v-for="post in posts"
      :key="post.id"
      class="posts"
    >
      <div class="material-card">
        <div class="material-card__img-holder"></div>
        <!-- <div class="material-card__header">
          <h3></h3>
        </div> -->
        <div class="material-card__body">
          <div class="material-card__title">
            <h3>{{post.title}}</h3>
            <span class="overlay-open">?</span>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, distinctio suscipit nesciunt illum quod mollitia fugiat, omnis corrupti nostrum ipsa numquam ea error maiores cumque porro est labore rerum.</p>
            <ul>
              <li>Some text</li>
              <li>Some text</li>
              <li>Some text</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, distinctio suscipit nesciunt illum quod mollitia fugiat, omnis corrupti nostrum ipsa numquam ea error maiores cumque porro est labore rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, distinctio suscipit nesciunt illum quod mollitia fugiat, omnis corrupti nostrum ipsa numquam ea error maiores cumque porro est labore rerum.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Мрачная Гавань",
          body: "№1 среди настольных игр",
          tags: [],
        },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {},
  },
};
</script>

<style scoped>
.hello {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  padding: 15px;
}

.create-post-form {
  margin-bottom: 30px;
  width: 50%;
  display: flex;
  flex-direction: column;
}

.create-post-form input {
  margin-bottom: 10px;
  padding: 5px;
  border: 2px solid #fd6c01;
}

.create-post-form button {
  align-self: flex-end;
  padding: 5px;
  font-size: 16px;
  background-color: transparent;
  border: 2px solid #fd6c01;
  cursor: pointer;
}

.create-post-form button:hover {
  color: #ffffff;
  background-color: #fd6c01;
}

.posts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

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
.material-card__title span {
  position: absolute;
  right: 5%;
  top: -35px;
  font-size: 23px;
  color: white;
  background-color: #fd6c01;
  padding: 7px 12px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 3px 7px lightgray;
  transition: 0.2s linear;
}

.material-card__title span:hover {
  background-color: #ce5703;
  box-shadow: 0 0px 0px lightgray;
}

.material-card__footer {
  position: relative;
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

.material-card__footer ul {
  display: flex;
  flex-wrap: wrap;
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
  background-color: darken(#fd6c01, 5%);
  box-shadow: 0 0px 0px lightgray;
}

.overlay__body {
  overflow-y: auto;
  padding: 15px;
  line-height: 1.25;
}

.overlay__body ul {
  margin: 10px 0px;
  padding-left: 10px;
}

.overlay__body li:before {
  content: "";
  position: relative;
  display: inline-block;
  bottom: 2px;
  width: 7px;
  height: 7px;
  margin-right: 5px;
  border-radius: 30px;
  background-color: #fd6c01;
}
</style>
