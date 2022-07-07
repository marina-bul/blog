<template>
  <form
    class="create-post-form"
    @submit.prevent
  >
    <input
      :value="post.title"
      @input="post.title = $event.target.value"
      v-focus
      type="text"
      placeholder="Введите заголовок поста"
    >
    <textarea
      :value="post.body"
      @input="post.body = $event.target.value"
      type="text"
      placeholder="Введите текст поста"
      rows="7"
    >
    </textarea>

    <input
      type="file"
      ref="postImage"
      @change="sync"
    />
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
        postImage: "",
      },
    };
  },
  methods: {
    sync(e) {
      e.preventDefault();
      this.post.postImage = e.target.files[0];
    },

    writePost() {
      const newPost = {
        id: Date.now(),
        title: this.post.title,
        body: this.post.body,
        img: this.post.postImage,
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
  width: 100%;
  display: flex;
  flex-direction: column;
}

.create-post-form input {
  margin-bottom: 10px;
}

.create-post-form input,
.create-post-form textarea {
  padding: 5px;
  border: 2px solid #fd6c01;
}

.create-post-form .new-post-btn {
  margin-top: 15px;
  align-self: flex-end;
  font-size: 16px;
}
</style>