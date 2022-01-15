<template>
  <form
    class="create-post-form"
    @submit.prevent
  >
    <input
      :value="post.title"
      @input="post.title = $event.target.value"
      type="text"
      placeholder="Введите заголовок поста"
    >
    <input
      :value="post.body"
      @input="post.body = $event.target.value"
      type="text"
      placeholder="Введите текст поста"
    >
    <card-button
      @click.native="writePost"
      class="new-post-btn"
    >Создать</card-button>
  </form>
</template>

<script>
export default {
  name: "post-form",
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    writePost() {
      const newPost = {
        id: Date.now(),
        title: this.post.title,
        body: this.post.body,
        tags: [],
      };
      this.$emit("create", newPost);
      this.post.title = "";
      this.post.body = "";
    },
  },
};
</script>

<style scoped>
.create-post-form {
  margin: 30px 0;
  width: 90%;
  display: flex;
  flex-direction: column;
}

.create-post-form input {
  margin-bottom: 10px;
  padding: 5px;
  border: 2px solid #fd6c01;
}

.create-post-form .new-post-btn {
  align-self: flex-end;
  font-size: 16px;
}
</style>