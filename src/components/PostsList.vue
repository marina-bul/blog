<template>
  <div>
    <div v-if="posts.length > 0">
      <transition-group
        name="posts-list"
        class="post-container"
        tag="div"
      >
        <post
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @remove="removePost"
        />
      </transition-group>
    </div>
    <h3 v-else>
      Вы еще не добавили ни одного поста
    </h3>
  </div>

</template>

<script>
import Post from "@/components/Post.vue";
export default {
  components: { Post },
  name: "posts-list",
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removePost(post) {
      this.$emit("remove", post);
    },
  },
};
</script>

<style scoped>
.post-container {
  margin: 50px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.4s;
}
.posts-list-enter,
.posts-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.posts-list-move {
  transition: transform 0.6s ease;
}
</style>
